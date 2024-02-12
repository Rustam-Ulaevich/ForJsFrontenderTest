var windowPresenterLeft;
var windowPresenterRight;

window.addEventListener("load", OnStartup, false);
function OnStartup() {
  windowPresenterLeft = new GameUnitCardWindowPresenter($("#battle-unit-card-window-left"), "left");
  windowPresenterRight = new GameUnitCardWindowPresenter($("#battle-unit-card-window-right"), "right");

  // todo вызов Одного из Тестов для отображения в UI
  //TestArcher1();
  //TestDeadcountess1();
  TestArcher2();
}

// карта (конфиг) всех юнитов типа Лучник
var unitCardArcher = {
  blockFront: 0.6,
  blockSide: 0.3,
  armor: 0.08,

  isAlive: true,
  isUncontrollable: false,
  moveDistance: 3,

  strength: 18,
  range: 6,
  critChance: 0.005,

  cooldownMove: 1,
  cooldownAttack: 1,
};

// карта (конфиг) всех юнитов типа Мёртвая графиня
var unitCardDeadcountess = {
  blockFront: 0.0,
  blockSide: 0.0,
  armor: 0.0,

  isAlive: true,
  isUncontrollable: false,
  moveDistance: 3,

  strength: 0, // NOTE НЕ АТАКУЕТ, А ПРИМЕНЯЕТ СПОСОБНОСТЬ "Заморозка"
  range: 2,
  critChance: 0.0,

  cooldownMove: 1,
  cooldownAttack: 2,
};

function TestArcher1() {
  // инстанс юнита - Лучник
  let unit = {
    type: "archer",
    currentHealth: 30,
    health: 40,
    cooldown: 1, // !
    effects: {
      isOnFocus: false,
      isOnBarrier: false,
      isOnFreeze: false,
      isOnPoison: false,
      isOnArmor: false,
    },
  };

  windowPresenterLeft.Show(unit, unitCardArcher);
}

// todo в UI должно быть (вместо цифры атаки) "Атака - Заморозка" (и без шанса крита) - см скрин "TestDeadcountess1.png"
function TestDeadcountess1() {
  // инстанс юнита - Мёртвая графиня
  let unit = {
    type: "deadcountess",
    currentHealth: 35,
    health: 35,
    cooldown: 0,
    effects: {
      isOnFocus: false,
      isOnBarrier: false,
      isOnFreeze: false,
      isOnPoison: false,
      isOnArmor: false,
    },
  };

  windowPresenterLeft.Show(unit, unitCardDeadcountess);
}

function TestArcher2() {
  // инстанс юнита - Лучник
  let unit = {
    type: "archer",
    currentHealth: 30,
    health: 40,
    cooldown: 0, // !
    effects: [                                // Изменил свойство effects
      { type: 'focus', isEnabled: false },
      { type: 'barrier', isEnabled: true },
      { type: 'freeze', isEnabled: true },
      { type: 'poison', isEnabled: true },
      { type: 'armor', isEnabled: true },
    ]
  };

  windowPresenterLeft.Show(unit, unitCardArcher);
}
