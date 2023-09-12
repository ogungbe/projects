% Facts - teams in groups
group(a, [team1, team2, team3, team4, team5]).
group(b, [team6, team7, team8, team9, team10]).
group(c, [team11, team12, team13, team14, team15]).
group(d, [team16, team17, team18, team19, team20]).
group(e, [team21, team22, team23, team24, team25]).
group(f, [team26, team27, team28, team29, team30]).

% Helper predicate to check if an element is a member of a list
member(X, [X|_]).
member(X, [_|T]) :- member(X, T).

% Helper predicate to check if a list has no duplicate elements
no_duplicates([]).
no_duplicates([H|T]) :- not(member(H, T)), no_duplicates(T).

% Helper predicate to count occurrences of an element in a list
count_occurrences(_, [], 0).
count_occurrences(X, [X|T], N) :- count_occurrences(X, T, N1), N is N1 + 1.
count_occurrences(X, [H|T], N) :- H \= X, count_occurrences(X, T, N).

% Helper predicate to get the list of all fixtures for a group
get_all_fixtures(Group, Fixtures) :-
    group(Group, Teams),
    findall((A,B), (member(A, Teams), member(B, Teams), A \= B), Fixtures).

% Helper predicate to get the list of fixtures for a team
get_team_fixtures(Team, Fixtures) :-
    findall((A,B), (get_all_fixtures(_, Fixtures), (A,B) = (Team,_); (A,B) = (_,Team)), Fixtures).

% Helper predicate to get the list of all days in the schedule
get_all_days(Schedule, Days) :- findall(Day, member((_,_,Day), Schedule), Days).

% Helper predicate to check if there are no more than three matches on any day
no_more_than_three_matches([]).
no_more_than_three_matches(Schedule) :-
    get_all_days(Schedule, Days),
    no_duplicates(Days),
    member(Day, Days),
    findall(A, member((A,_,Day), Schedule), TeamA),
    findall(B, member((_,B,Day), Schedule), TeamB),
    append(TeamA, TeamB, Teams),
    no_duplicates(Teams),
    length(TeamA, CountA),
    length(TeamB, CountB),
    CountA =< 3,
    CountB =< 3,
    no_more_than_three_matches([(A,B,Day)|Rest]).

% Helper predicate to check if each team has the same number of home and away fixtures
same_number_of_home_away_fixtures([]).
same_number_of_home_away_fixtures(Schedule) :-
    findall(Team, (get_all_fixtures(_, Fixtures), member((Team,_), Fixtures)), Teams),
    no_duplicates(Teams),
    member(Team, Teams),
    get_team_fixtures(Team, Fixtures),
    count_occurrences((Team,_), Fixtures, CountHome),
    count_occurrences((_,Team), Fixtures, CountAway),
    CountHome =:= CountAway,
    same_number_of_home_away_fixtures(Schedule).

% Helper predicate to check if each team has at least four rest days between fixtures
at_least_four_rest_days([]).
at_least_four_rest_days(Schedule) :-
findall(Team, (get_all_fixtures(, Fixtures), member((Team,), Fixtures)), Teams),
no_duplicates(Teams),
member(Team, Teams),
get_team_fixtures(Team, Fixtures),
get_all_days(Schedule, Days),
member((Team,,Day1), Fixtures),
member((_,Team,Day2), Fixtures),
Day2 > Day1,
RestDays is Day2 - Day1 - 1,
RestDays >= 4,
at_least_four_rest_days(Schedule).

% Predicate to check if a schedule is valid
schedule(S) :-
length(S, NumMatches),
NumMatches =< 18, % Total number of matches should not exceed 18
no_more_than_three_matches(S),
same_number_of_home_away_fixtures(S),
at_least_four_rest_days(S).




