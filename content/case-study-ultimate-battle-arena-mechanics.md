# Ultimate Battle Arena Case Study

**Client**: FRAG Games  
**Role**: Lead Game Designer  

## Impact
- **Improved Scalability**: The modular class and meta-character approach made the design future-proof and allowed for efficient content expansion.
- **Enhanced Collaboration**: The new structure made it easier for junior designers to understand and contribute, improving overall team productivity.
- **Balanced Gameplay**: The introduction of stat rankings and the middle layer ensured that each card archetype was balanced, leading to a fair and engaging player experience.
- **Positive Feedback**: The CEO of FRAG Games, Ali Ihsan, praised the redesign for reducing the workload for the entire team and making the game development process smoother and more collaborative.

## Challenges & Solutions
### Class System Overhaul
Initially, the battle system followed a traditional turn-based structure similar to Hearthstone, where an entire deck would take a turn, and players would end their turn once they ran out of energy to play cards. However, this approach presented significant issues for our intended design, which featured cooldowns and a need for more granular control over individual card actions.

In the updated design, each card's action was considered a separate turn. This meant that cooldowns could be managed based on individual card actions, tracked through both a **global turn counter (gT)** and individual **self turns (sT)** for each card. The global turn counter represented the overall battle progress, while the self turn tracked how many times a specific card had acted. This provided the clarity needed for abilities with cooldowns, making the system more manageable and predictable.

I documented and designed this new turn system thoroughly, ensuring that it was locked down for everyone involved in the project, from designers to developers. This consistency allowed us to balance abilities more effectively and enhance the strategic depth of the game.

### Concept & Design Approach
My design philosophy was to treat the deck as a meta-character composed of **5 attributes**: **Physical Attack**, **Physical Defense**, **Magic Attack**, **Magic Defense**, and **Attack Range**. The idea was that each card had these same attributes, representing 1/5th of the total meta-character's attributes. Thus, the meta-character's stats were effectively the combined attributes of the 5 cards in the player's hand.

While defining cards using only these 5 attributes, I realized they were not sufficient to capture the complexity needed. Therefore, I added **6 more attributes**: **AOE Buffs**, **Dodge Chance**, **Crit Chance**, **Crit Damage**, **AOE Offensive**, and **Resistance to Crowd Control**. These additional attributes allowed for greater diversity in card interactions and strategic options, enriching the overall gameplay.

| Attribute         | Description                           |
|-------------------|---------------------------------------|
| Physical Attack   | Damage dealt through physical attacks |
| Physical Defense  | Resistance against physical attacks   |
| Magic Attack      | Damage dealt through magic attacks    |
| Magic Defense     | Resistance against magic attacks      |
| Attack Range      | Distance of attacks                   |
| AOE Buffs         | Buffs affecting multiple allies       |
| Dodge Chance      | Chance to evade attacks               |
| Crit Chance       | Chance to land a critical hit         |
| Crit Damage       | Additional damage from critical hits  |
| AOE Offensive     | Area damage affecting multiple enemies|
| Resistance to CC  | Resistance to crowd control effects   |

With these attributes in place, I created **5 primary classes**—**Tank**, **Warrior**, **Ranged**, **Mage**, and **Support**—but I wanted variety within each class. I aimed to ensure that multiple types of healer decks, damage decks, and crowd control decks could be created. To achieve this, I designed at least **3 archetypes** for each class, ensuring that a random selection of 5 cards from different classes would create a balanced meta-character.

| Class       | Archetype          | Physical Offense | Magic Offense | Physical Defense | Magic Defense | Speed | AOE Buffs | Dodge Chance | Crit Chance | Crit Damage | AOE Offensive | Resistance to CC |
|-------------|--------------------|------------------|---------------|------------------|---------------|-------|-----------|--------------|-------------|-------------|---------------|------------------|
| Tank        | Paladin-Caster     | 2                | 3             | 2                | 3             | 1     | 3         | 0            | 0           | 0           | 2             | 2                |
| Tank        | Taunter            | 3                | 0             | 4                | 1             | 3     | 1         | 2            | 0           | 0           | 2             | 2                |
| Tank        | Damage Sponge      | 0                | 0             | 6                | 6             | 0     | 0         | 0            | 0           | 0           | 0             | 6                |
| Warrior     | Defensive Aura     | 1                | 1             | 3                | 3             | 1     | 5         | 0            | 0           | 0           | 1             | 3                |

This archetype-based approach allowed me to create a "perfect" late-game deck first, akin to designing elite football players like Ronaldo, Messi, or great goalkeepers. By starting with the best possible cards, I could establish a consistent attribute architecture across all cards and efficiently test the battle system. The remaining cards in the game economy would then be designed as weaker variations, maintaining a balanced and engaging experience for players.

### Stat Rankings & Battle System Integration
The stat rankings for each archetype were used to assign behavior to each card. These rankings were then converted into battle parameters, which influenced how the cards interacted during battles. For instance, a card with high points in **Physical Attack** would have its rank translated into specific values for **Attack Power**, **Crit Damage**, and **Cooldown Reduction**. This approach allowed for a consistent and transparent balancing process, making it easier for the entire team to understand the role of each card.

### Automation & Efficiency
To streamline the design process, I used **Google Apps Script** to automate the generation of card stats based on their archetype and rank. This allowed us to generate low-level values for each card's strength, which varied based on the card's rarity (e.g., Common, Rare). The automation saved time and ensured consistency across the hundreds of cards.

---

[Back to Projects](./projects.md)
