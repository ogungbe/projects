group(1, [1,2,3,4,5]).
group(2, [6,7,8,9,10]).
group(3, [11,12,13,14,15]).
group(4, [16,17,18,19,20]).
group(5, [21,22,23,24,25]).
group(6, [26,27,28,29,30]).

game(TeamA, TeamB, Game) :-
    TeamA < TeamB,
    Game = (TeamA, TeamB).

game_in_group(Group, Game) :-
    member(TeamA, Group),
    member(TeamB, Group),
    game(TeamA, TeamB, Game).

all_teams(Teams) :-
    findall(Team, (group(_, Group), member(Team, Group)), AllTeams),
    sort(AllTeams, Teams).

valid_schedule(Schedule) :-
    valid_games(Schedule),
    valid_days(Schedule),
    valid_rest_days(Schedule),
    valid_home_away_balance(Schedule).

valid_games(Schedule) :-
    findall(Game, (group(_, Group), game_in_group(Group, Game)), Games),
    sort(Games, SortedGames),
    schedule_games(Schedule, ScheduledGames),
    sort(ScheduledGames, SortedGames).

valid_days(Schedule) :-
    \+ (setof(Day, A^B^(member((A, B, Day), Schedule)), Days),
        member(Day, Days),
        findall(_, member((_, _, Day), Schedule), Matches),
        length(Matches, Count),
        Count > 3).

valid_rest_days(Schedule) :-
    all_teams(Teams),
    \+ (member(Team, Teams), team_rest_days_violation(Schedule, Team)).

team_rest_days_violation(Schedule, Team) :-
    findall(Day, (member((Team, _, Day), Schedule); member((_, Team, Day), Schedule)), Days),
    sort(Days, SortedDays),
    append([_, _, _, _, _], SortedDaysWithGap, SortedDays),
    append(SortedDaysWithGap, [_, _, _, _, _], SortedDays).

valid_home_away_balance(Schedule) :-
    all_teams(Teams),
    \+ (member(Team, Teams), home_away_difference(Schedule, Team, Diff), Diff =\= 0).

home_away_difference(Schedule, Team, Diff) :-
    aggregate(count, member((Team, _, _), Schedule), HomeCount),
    aggregate(count, member((_, Team, _), Schedule), AwayCount),
    Diff is HomeCount - AwayCount.

schedule_games([], []).
schedule_games([(A, B, _)|Rest], [(A, B)|Games]) :-
    schedule_games(Rest, Games).

generate_schedule([], _, _, []).
generate_schedule([(A, B)|Games], Day, DayMatches, [(A, B, Day)|Schedule]) :-
    DayMatches < 3,
    NextDayMatches is DayMatches + 1,
    generate_schedule(Games, Day, NextDayMatches, Schedule).

generate_schedule([Game|Games], Day, _, Schedule) :-
    NextDay is Day + 1,
    generate_schedule([Game|Games], NextDay, 0, Schedule).

print_schedule([]).
print_schedule([(TeamA, TeamB, Day)|Rest]) :-
    group(GroupA, TeamsA),
    group(GroupB, TeamsB),
    member(TeamA, TeamsA),
    member(TeamB, TeamsB),
    format("Day ~w: Team ~w (Group ~w) vs Team ~w (Group ~w)~n", [Day, TeamA, GroupA, TeamB, GroupB]),
    print_schedule(Rest).

schedule(Schedule) :-
    findall(Game, (group(_, Group), game_in_group(Group, Game)), Games),
    generate_schedule(Games, 1, 0, Schedule),
    valid_schedule(Schedule),
    print_schedule(Schedule).
