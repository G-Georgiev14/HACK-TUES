class FitnessLeaderboard {
  constructor() {
      this.users = {};  
  }

  registerUser(username) {
      
      if (!this.users[username]) {
          this.users[username] = 0;
          console.log(`Потребител ${username} е регистриран успешно!`);
      } else {
          console.log(`Потребител ${username} вече съществува!`);
      }
  }

  addPoints(username, points) {
      
      if (this.users[username] !== undefined) {
          this.users[username] += points;
          console.log(`Добавени ${points} точки към ${username}. Общо точки: ${this.users[username]}`);
      } else {
          console.log(`Потребител ${username} не е намерен!`);
      }
  }

  getLeaderboard() {

      return Object.entries(this.users)
          .sort((a, b) => b[1] - a[1]); 
  }

  displayLeaderboard() {
    
      const leaderboardList = document.getElementById("leaderboard-list");
      leaderboardList.innerHTML = "";  

      const leaderboard = this.getLeaderboard();
      leaderboard.forEach(([username, points], index) => {
          const userRow = document.createElement("div");
          userRow.classList.add("user-row");

          userRow.innerHTML = `
              <span class="rank">${index + 1}</span>
              <span class="username">${username}</span>
              <span class="points">${points}</span>
          `;

          leaderboardList.appendChild(userRow);
      });
  }
}


const leaderboard = new FitnessLeaderboard();

leaderboard.registerUser("user1");
leaderboard.registerUser("user2");
leaderboard.registerUser("user3");

leaderboard.addPoints("user1", 50);
leaderboard.addPoints("user2", 30);
leaderboard.addPoints("user3", 70);
leaderboard.addPoints("user1", 20);

leaderboard.displayLeaderboard();
