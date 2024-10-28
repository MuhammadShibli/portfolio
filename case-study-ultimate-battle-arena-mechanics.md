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
My design philosophy was to treat the deck as a meta-character composed of **5 main attributes**: **Physical Attack**, **Physical Defense**, **Magic Attack**, **Magic Defense**, and **Attack Range**. Each card would be a part of this meta-character and would need to interact effectively with other cards in the deck to create a cohesive and strategic build.

To enhance the gameplay complexity, I added **6 sub-attributes**: **AOE Buffs**, **Dodge Chance**, **Crit Chance**, **Crit Damage**, **AOE Offensive**, and **Resistance to Crowd Control**. These sub-attributes allowed for more diverse interactions and strategies, further enriching the player's options during battles.

I then created archetypes for each class—**Tank**, **Warrior**, **Ranged**, **Mage**, and **Support**—that specialized in specific attributes. Each archetype was defined by assigning ranks to the main and sub-attributes, with a cap of **6 points** per attribute. For example, having **6 points in Physical Attack** meant that the card was the strongest possible in dealing physical damage, defined by the number of turns required to deplete an opponent's health to zero. This approach allowed for relative balancing, where the strongest cards could take 1-2 attack turns to eliminate an opponent, while weaker cards might take more than 4 turns.

Using this primary and sub-attribute design, I was able to create different archetypes for each class, such as:

- **Paladin-Caster (Tank)**: Balanced in magic offense and defense, providing supportive magic capabilities.  
  - Attributes: Physical Offense: 2, Magic Offense: 3, Physical Defense: 2, Magic Defense: 3, Speed: 1, AOE Buffs: 3, Dodge Chance: 0, Crit Chance: 0, Crit Damage: 0, AOE Offensive: 2, Resistance to Crowd Control: 2

- **Taunter (Tank)**: Focused on drawing enemy attacks while maintaining moderate defense and speed.  
  - Attributes: Physical Offense: 3, Magic Offense: 0, Physical Defense: 4, Magic Defense: 1, Speed: 3, AOE Buffs: 1, Dodge Chance: 2, Crit Chance: 0, Crit Damage: 0, AOE Offensive: 2, Resistance to Crowd Control: 2

- **Damage Sponge (Tank)**: High physical and magic defense, specialized in absorbing damage.  
  - Attributes: Physical Offense: 0, Magic Offense: 0, Physical Defense: 6, Magic Defense: 6, Speed: 0, AOE Buffs: 0, Dodge Chance: 0, Crit Chance: 0, Crit Damage: 0, AOE Offensive: 0, Resistance to Crowd Control: 6

- **Defensive Aura (Warrior)**: Provided strong area buffs and moderate defensive abilities to the team.  
  - Attributes: Physical Offense: 1, Magic Offense: 1, Physical Defense: 3, Magic Defense: 3, Speed: 1, AOE Buffs: 5, Dodge Chance: 0, Crit Chance: 0, Crit Damage: 0, AOE Offensive: 1, Resistance to Crowd Control: 3

This archetype-based approach ensured that each class was highly specialized in its role, relying on the rest of the cards to cover its weaknesses. It also encouraged players to think strategically about which archetypes to include in their deck to maximize synergies and effectiveness.

### Stat Rankings & Battle System Integration
The stat rankings for each archetype were used to assign behavior to each card. These rankings were then converted into battle parameters, which influenced how the cards interacted during battles. For instance, a card with high points in **Physical Attack** would have its rank translated into specific values for **Attack Power**, **Crit Damage**, and **Cooldown Reduction**. This approach allowed for a consistent and transparent balancing process, making it easier for the entire team to understand the role of each card.

### Automation & Efficiency
To streamline the design process, I used **Google Apps Script** to automate the generation of card stats based on their archetype and rank. This allowed us to generate low-level values for each card's strength, which varied based on the card's rarity (e.g., Common, Rare). The automation saved time and ensured consistency across the hundreds of cards.

---

[Back to Projects](./projects.md)
