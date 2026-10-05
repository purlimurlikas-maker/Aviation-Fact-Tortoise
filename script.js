const globe = document.querySelector("#tortoise");
const button = document.querySelector("#press");
const message = document.querySelector("#message");

const messages = [
  "In 1996, the Concorde set the record flying time from New York to London- making the journey in only 2 hours, 52 minutes, and 59 seconds and traveling at speeds of up to 1,354 mph.",
  "The Concorde was retired in 2003.",
  "The Boeing 747 has roughly 6 million parts.",
  "Although 80% of people have a fear of flying (aerophobia) only 5% of the world’s population have been on an airplane.",
  "There are an average of 10,000 planes in the sky at any one time carrying roughly 1 million passengers.",
  "The first African American woman to earn a pilot’s license was Willa Brown in 1939.",
  "The pilot and co-pilot on a flight are not allowed to eat the same meal.",
  "On average, each commercial airplane is struck by lightning at least once a year. (Dw, planes are built to handle that)",
  "The average cruising speed of a commercial jet is around 575 mph (925 km/h), which is about 75% of the speed of sound.",
  "Most commercial airplanes are painted white to reflect sunlight, which helps keep the aircraft cooler and minimizes potential sun damage to the fuselage.",
  "Commercial airplanes typically fly at altitudes between 30,000 and 40,000 feet. This is nearly 6 to 8 miles above the Earth’s surface!",
  "The oxygen masks that drop down in case of cabin pressure loss provide only about 12 to 15 minutes of oxygen.",
  "Have you ever noticed the small hole at the bottom of airplane windows? It’s called a breather hole and it’s there to regulate air pressure between the inner and outer window panes.",
  "If you're a LEGO fan, you'll love this fact! While the largest LEGO set consists of over 11,000 pieces, the Boeing 787 Dreamliner is made up of 2.5 million parts—each one catalogued and meticulously assembled.",
  "747s have flown more than 3.5 billion people.",
  "At any given moment, there are about 61,000 people airborne over the mainland United States. At Chicago-O’Hare Airport, one of the world’s busiest, planes take off or land every 37 seconds. More than 29,000 flights operate from the U.S. alone every day.",
  "Aircraft control towers need to have constant visibility of the airfield at all times. To that end, the glass in tower windows is angled precisely at 15°, which prevents glare and reflections from blocking a controller’s view of the runways.",
  "According to one estimate, you can lose about two cups of water from your body for every hour you spend flying—most of it breathed out through the mouth.",
  "Planes Can Glide Without Engines.",
  "Dimming cabin lights during takeoff and landing is a safety measure. It helps passengers’ eyes adjust to low-light conditions, preparing them for quick evacuation in case of an emergency.",
  "Despite the ban on smoking aboard most flights, airplane lavatories are still equipped with ashtrays. This might seem outdated, but it’s a necessary precaution. If someone violates the no-smoking policy, the ashtray provides a safe place to extinguish cigarettes, reducing fire hazards.",
  "Contrails, the white streaks left by airplanes, form when hot exhaust gases from jet engines mix with the cold atmosphere at high altitudes. This condensation process results in water vapor freezing into tiny ice crystals, creating visible trails.",
  "Your taste buds do not work the same way at 35,000 feet; low cabin humidity and pressurized air can reduce your senses of sweet and salty flavors by almost 30%. Airlines counter it by making their meals way more seasoned and umami-rich. (That's why the food tastes weird)",
  "The air inside airplane cabins has humidity levels as low as 10-20%, compared to 30-50% on the ground. This dryness can cause dehydration, skin irritation, and discomfort during long flights.",
  "Tray tables are among the dirtiest surfaces on an airplane, harboring more bacteria than lavatory surfaces. Passengers often use them for eating, working, and resting personal items, but they’re not always sanitized between flights.",
  "Among all the facts about aviation, the Antonov An-225 Mriya, the world’s largest aircraft, weighs 600 tons and was built to transport oversized cargo. Its massive size and engineering brilliance make it a marvel in the aviation industry.",
  "Studies show that passengers seated at the back of an airplane have higher survival rates in emergencies. ",
  "Pointing lasers at aircraft is illegal because it can temporarily blind or distract pilots, especially during critical phases like takeoff and landing.",
  "Flights are overbooked to keep fares low.",
  "Flight attendants have a variety of roles.",
  "Flight attendants are paid once the plane doors close",
  "Cabin air may be bad for your health.",
  "Air pressure makes your legs swell",
  "Pilots often fall asleep on the job.",
  "Budget airlines aren't less safe than full service carriers.",
  "Your lost luggage gets auctioned off.",
  "Air on top of the wings creates lift, not the air below.",
  "If your phone's left on, it probably won't interfere with the equipment (please still turn on airplane mode).",
  "Meals are prepared on the ground a few days in advance.",
  "Good manners goes a long way.",
  "Planes can really fly and land themselves.",
  "The world's shortest flight is just one minute long.",
  "Carbon from planes stays in the atmosphere for 100 years.",
  "That blanket and pillow are safety features too.",
  "Flight attendants have to be strong swimmers.",
  "A plane can't take off if you're in the loo.",
  "Airports collect extortionate landing fees.",
  "Eager to get on board? Cabin crew have a name for you (it's gate lice btw)",
  "The pilots and cabin crew rest in hidden compartments",
  "Planes are unlikely to crash due to turbulence.",
  "Empty 'ghost flights' fly all the time.",
  "Fly in the morning for less turbulence.",

];

button.addEventListener("click", () => {
  globe.classList.add("shaking");
  setTimeout(() => globe.classList.remove("shaking"), 600);

const pick = Math.floor(Math.random() * messages.length);
  message.textContent = messages[pick];
});