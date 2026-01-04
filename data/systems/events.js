function triggerRandomEvent() {
  const events = [
    () => { country.economy -= 5; alert("📉 Crise leve"); },
    () => { country.money += 10; alert("📈 Investimento externo"); }
  ];

  const event = events[Math.floor(Math.random() * events.length)];
  event();
  updateUI();
}
