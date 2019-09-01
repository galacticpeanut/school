class Character {

  // Attributes

  private int lifePoints;
  private int defensePoints;
  private int attackPoints;
  private int energyPoints;
  private int bonusPoints;
  private String name;

  public void setLifePoints(int lifePoints) {
    this.lifePoints=lifePoints;
  }

  public int getLifePoints() {
    return this.lifePoints;
  }

  public void setDefensePoints(int defensePoints) {
    this.defensePoints=defensePoints;
  }

  public int getDefensePoints() {
    return this.defensePoints;
  }

  public void setAttackPoints(int attackPoints) {
    this.attackPoints=attackPoints;
  }

  public int getAttackPoints() {
    return this.attackPoints;
  }

  public void setEnergyPoints(int energyPoints) {
    this.energyPoints=energyPoints;
  }

  public int getEnergyPoints() {
    return this.energyPoints;
  }

  public void setBonusPoints(int bonusPoints) {
    this.bonusPoints=bonusPoints;
  }

  public int getBonusPoints() {
    return this.bonusPoints;
  }

  public void setName(String name) {
    this.name=name;
  }

  public String getName() {
    return this.name;
  }

  public void printCharacter() {
    System.out.println(
      name +
      "\n Life Points:  \t" + lifePoints +
      "\n Energy Points:\t" + energyPoints +
      "\n Attack Points:\t" + attackPoints
    );
  }

  public Character(
  String name, int lifePoints, 
  int energyPoints, int attackPoints, 
  int bonusPoints) {
    this.name=name;
    this.lifePoints=lifePoints;
    this.energyPoints=energyPoints;
    this.attackPoints=attackPoints;
    this.bonusPoints=bonusPoints;
  }

  public void attack(Character opponent) {
    int opponentEP = opponent.getEnergyPoints();
    int ap = getAttackPoints();

    System.out.println(name + " is attacking ... " + opponent.getName());
    int newEP = opponentEP - ap;
    opponent.setEnergyPoints(newEP);
    opponent.printCharacter();

    if (opponent.getEnergyPoints() <= 0) {
      System.out.println(name + " Kills ... " + opponent.getName());
      int newLP = opponent.getLifePoints() - 1;
      opponent.setLifePoints(newLP);
      if (opponent.getLifePoints() < 0) {
        opponent.printCharacter();
        System.out.println(name + " Wins!\nGame Over!");
      } else {
        opponent.setEnergyPoints(100);
        opponent.printCharacter();
      }
    }

  }
}