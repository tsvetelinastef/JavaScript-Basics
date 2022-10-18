/*
Задачата ви е да напишете програма, която приема името на отбор и прави
статистика за него. През един сезон всеки отбор изиграва определен брой
футболни срещи, като за всяка среща на отбора се дават точки в зависимост
от изхода от срещата. Има три възможни изхода от една среща:
 W - Отборът е победител и получава 3 точки
 D - Срещата е завършила без победител и отборът получава 1 точка
 L - Отборът е загубил срещата и не получава точки
Напишете програма, която приема името на футболен отбор и извежда неговата
статистика, на база на изиграните срещи през този сезон. Неговата 
статистика трябва да включва общия брой спечелени точки през настоящия 
сезон, подробна статистика за изхода на изиграните игри и процент победи
през сезона. Ако отборът по някаква причина не е играл мачове през 
настоящия сезон се извежда специално съобщение.

Вход
От конзолата се четат два реда:
 Името на футболния отбор, за който водим статистика - текст
 Броя изиграни срещи през настоящия сезон - цяло число в интервала[0… 100]
За всяка изиграна среща се прочита отделен ред:
o Резултатът от изиграната среща в един от горепосочените формати – символ
с възможности  'W', 'D' и 'L'

Изход
В зависимост от това дали отборът е играл мачове през настоящия сезон се 
извеждат два вида изход.
 Ако отборът не е изиграл нито един мач през настоящия сезон се извежда 
точно един ред в следния формат:
o "{името на отбора} hasn't played any games during this season."
 Ако отборът е изиграл един мач или повече се извеждат шест реда в 
следния формат:
o "{името на отбора} has won {брой спечелени точки} points during this season"
o "Total stats:"
o "## W: {брой спечелени игри}"
o "## D: {брой игри, завършили наравно}"
o "## L: {брой загубени игри}"
o "Win rate: {процент спечелени игри}%"
Процентът спечелени игри трябва да бъде форматиран до втората цифра след 
десетичния знак. */
function footballTournament(input) {
    let nameTeam = input[0];
    let playedGames = Number(input[1]);

    let totalPoints = 0;
    let totalWins = 0;
    let totalDraws = 0;

    for (let i = 0; i <= playedGames + 1; i++) {
        let gameType = input.shift();

        if (gameType === "W") {
            totalPoints += 3;
            totalWins++;
        } else if (gameType === "D") {
            totalPoints += 1;
            totalDraws++;
        }
    }

    if (playedGames === 0) {
        console.log(`${nameTeam} hasn't played any games during this season.`);
    } else {
        let winRate = (totalWins * 1.0 / playedGames) * 100;

        console.log(`${nameTeam} has won ${totalPoints} points during this season.`);
        console.log("Total stats:");
        console.log(`## W: ${totalWins}`);
        console.log(`## D: ${totalDraws}`);
        console.log(`## L: ${Math.abs(playedGames - (totalWins + totalDraws))}`);
        console.log(`Win rate: ${winRate.toFixed(2)}%`);
    }

}

//footballTournament(["Liverpool", "10", "W", "D", "D", "W", "L", "W", "D", "D", "W", "W"]);
/* Liverpool has won 19 points during this season.
Total stats:
## W: 5
## D: 4
## L: 1
Win rate: 50.00% */

footballTournament(["Barcelona", "7", "W", "D", "L", "L", "W", "W", "D"]);
/* Barcelona has won 11 points during this season.
Total stats:
## W: 3
## D: 2
## L: 2
Win rate: 42.86% */

footballTournament(["Chelsea", "0"]);
/* Chelsea hasn't played any games during this season. */
