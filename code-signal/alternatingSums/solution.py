def alternatingSums(a):
    team1 = []
    team2 = []
    for index, weight in enumerate(a):
        if index % 2 == 0:
            team1.append(weight)
        else:
            team2.append(weight)

    return [sum(team1, 0), sum(team2, 0)]


alternatingSums([50, 60, 60, 45, 70])
