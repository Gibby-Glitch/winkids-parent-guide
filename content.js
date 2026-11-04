// Win Kids Parent Guide content.
// Edit the text in this file to change what parents see. Keep the quotes and commas as they are.
// Each skill is: ["Name", "What it looks like", "Why it matters"]

const EVENT_INFO = {
  bars: "Bars build grip, arm and core strength. Most of the work is learning to swing and to hold their own body weight.",
  beam: "Beam builds balance and focus. Every skill is learned on the floor or a low beam first, then moves higher.",
  floor: "Floor is where rolls, handstands and cartwheels live. These shapes show up on every other event too.",
  vault: "Vault is about running fast, bouncing off the springboard, and landing safely. Soft mats stand in for the vault table at first.",
  rod: "Rod floor is a long, springy tumbling strip. It's bouncier than regular floor, so athletes get a little extra help learning rolls, cartwheels and round offs.",
  dmt: "The double mini is a small trampoline with two parts. Athletes run, bounce onto the first part, do a skill off the second, and land on a mat. Early on, most of the work is the approach and safe landings.",
  tramp: "On the big trampoline, control comes first: bouncing in the middle, stopping on purpose, and landing safely in different positions long before anything flips."
};

const CLASSES = {
  "gym-girls": {
    name: "Gym Girls", leo: "pink", leoName: "Pink leo", age: "Ages 5–6", len: "45 min", level: "Beginner",
    summary: "Your athlete's first grade-school class. They're learning to hold their own body weight, to land safely, and to feel comfortable upside down.",
    focus: "Big goal for this class: a strong body and a fearless start. Strength and confidence come before the flashy skills.",
    skills: {
      bars: [
        ["Tuck hang", "Hangs from the bar with knees pulled up to the chest.", "Builds grip and tummy strength. Every bar skill depends on being able to hang on."],
        ["Support hold", "Holds their body up on top of the bar with straight arms.", "This is home base on bars. Almost every bar skill starts or finishes in this position."],
        ["Cast", "From the support hold, swings the legs back and pushes the hips away from the bar.", "The cast is how gymnasts make their own swing. It leads straight into later skills like the back hip circle."]
      ],
      beam: [
        ["Front support straddle mount", "Pushes up on the arms and swings one leg over to sit on the beam.", "Teaches a safe, controlled way to get on the beam."],
        ["Forward walks", "Walks tall along the beam, eyes forward.", "Balance and focus. Walking well is the base for every beam skill."],
        ["Straight jump dismount", "Jumps off the end of the beam and lands with feet together.", "Safe landings are one of the first things we teach, so athletes know how to get down on purpose."]
      ],
      floor: [
        ["Forward roll down incline", "A forward roll down a wedge-shaped mat.", "The slope helps with the roll, and athletes learn to tuck the chin to protect the neck."],
        ["3/4 handstand", "Kicks the legs up most of the way, not straight up yet.", "Builds arm strength and comfort being upside down before a full handstand."],
        ["3/4 cartwheel", "A cartwheel shape with legs not yet all the way overhead.", "A real cartwheel needs strong arms and straight legs. This step builds both."]
      ],
      vault: [
        ["Running and skipping", "Learning to run with good form.", "All of the power in vault comes from the run."],
        ["Stretch jump stick", "Jumps straight up and lands without moving the feet.", "\"Stick\" means a landing with no wobble or step. Good landings keep gymnasts safe."],
        ["Wall handstand", "A handstand using a wall for support.", "Lets athletes practice a straight, tight body upside down without worrying about falling over."]
      ]
    }
  },
  "cartwheels": {
    name: "Cartwheels", leo: "blue", leoName: "Blue leo", age: "Ages 6+", len: "55 min", level: "Level 1 · Beginner",
    summary: "Your athlete has the basics. Now they add new positions, a first circle on the bar, and first springboard bounces.",
    focus: "Big goal for this class: more control. Skills that used to need a coach's hand start to happen on their own.",
    skills: {
      bars: [
        ["Straddle hang", "Hangs from the bar with legs open in a wide V.", "Builds core strength and flexibility for swinging skills."],
        ["Chin hold, 5 seconds", "Holds the chin above the bar with bent arms for five seconds.", "Pulling strength. Athletes need it to pull themselves over the bar in a pullover."],
        ["Back hip circle with help", "Circles backward around the bar with a coach assisting.", "The first full circle on bars and one of the key skills in a beginner bar routine."]
      ],
      beam: [
        ["Backward walks", "Walks backward along the beam.", "Harder than it looks because athletes can't see where they're going. Builds body awareness."],
        ["Needle lever", "Tips forward on one leg while the other leg lifts high behind.", "Teaches control and flexibility. It's a step toward a handstand on the beam."],
        ["Walk on toe (relevé)", "Walks up on the balls of the feet.", "Relevé (\"ruh-luh-VAY\") builds ankle strength and balance. It's used in nearly all beam work."]
      ],
      floor: [
        ["Forward roll on floor", "A forward roll on flat floor, no wedge to help.", "Now the athlete makes all the momentum."],
        ["Back roll off mat", "A backward roll down a raised mat.", "The first backward skill. The slope makes it easier while athletes learn to push with their hands."],
        ["3/4 handstand and 3/4 cartwheel", "The same shapes as before, now cleaner and stronger.", "Repeating a skill until it's clean is normal. That's how it becomes safe to go further."]
      ],
      vault: [
        ["Handstand flatback on mat", "Kicks to a handstand and falls flat onto the back on a stack of soft mats, body straight.", "Teaches the tight, straight body that real vaults need."],
        ["Run and punch on springboard", "Runs and bounces off the springboard with both feet.", "\"Punch\" means a quick, springy bounce. It's what makes a vault go up."],
        ["Kick up to handstand on wall", "Kicks up into a handstand against the wall without help.", "Builds the strength and courage to go upside down on their own."]
      ]
    }
  },
  "dynamos": {
    name: "Dynamos", leo: "red", leoName: "Red leo", age: "Ages 6+", len: "55 min", level: "Level 2 · Intermediate",
    summary: "Real gymnastics skills start to show up: full cartwheels and handstands on floor, a back hip circle on their own, and swings on bars.",
    focus: "Big goal for this class: doing it alone. Skills that had a coach's help or a mat to help now happen independently.",
    skills: {
      bars: [
        ["Glide swings", "Swings under the low bar with feet skimming forward.", "This swing is the base for the kip, a key skill in competitive gymnastics later on."],
        ["Pullover to support (with mat)", "Pulls up and over the bar, stepping off a mat to start.", "The pullover is how gymnasts get on the bar. The mat helps until the athlete is strong enough to go from the floor."],
        ["Back hip circle", "Circles backward around the bar without help.", "The skill started with a coach's help in Cartwheels, now done on their own."]
      ],
      beam: [
        ["Lever to 3/4 handstand", "Tips forward and kicks most of the way to a handstand on the beam.", "Takes floor handstand work up onto the beam."],
        ["Forward and backward kicks", "Kicks one leg high while walking forward or back.", "Balance while moving, plus flexibility."],
        ["Stretch or split jump, 3/4 side dismount", "Jumps on the beam, then gets off by kicking partway to a handstand off the side.", "Jumping and landing on a narrow beam takes a lot of control."]
      ],
      floor: [
        ["Cartwheel", "A full cartwheel with legs going over the top.", "A cornerstone skill. The round off, a skill in the next class, comes from the cartwheel."],
        ["Handstand", "A full handstand on the floor.", "The handstand shows up on every event. It's probably the most important skill in gymnastics."],
        ["Back roll on floor", "A backward roll on flat floor.", "No slope to help now. Athletes have to push through their hands."]
      ],
      vault: [
        ["Sprint, punch, straight jump stick", "Sprints, bounces off the springboard, and lands a straight jump without moving.", "Speed, bounce and landing all in one."],
        ["Kick handstand flatback (on their own)", "Kicks to a handstand and falls flat onto soft mats without help.", "Same shape as Cartwheels, now independent."],
        ["Jump to dive roll down incline", "Jumps off the board and dives into a forward roll down a wedge mat.", "Teaches athletes to reach forward and roll out safely after flight."]
      ]
    }
  },
  "spirals": {
    name: "Spirals", leo: "black", leoName: "Black leo", age: "Ages 6+", len: "55 min", level: "Advanced",
    summary: "Our most advanced grade-school class. Athletes put skills together into routines, including a full bar routine at a competition level.",
    focus: "Big goal for this class: linking skills. Doing one skill is very different from doing four in a row with good form.",
    skills: {
      bars: [
        ["Straight or straddle glide swing", "A longer, cleaner glide swing with legs together or apart.", "Gets athletes ready for the kip, the next big bar skill."],
        ["Independent pullover", "Pulls up and over the bar from the floor, no mat to help.", "A big strength milestone. Many kids work on this one for a long time."],
        ["Silver bar routine", "Pullover, 2 casts, back hip circle, underswing dismount.", "This is a real competition routine (Silver level). Underswing dismount means swinging under the bar and letting go to land."]
      ],
      beam: [
        ["Stretch, split and tuck jumps", "Three different jumps on the beam.", "Jumps with different shapes test balance and landing."],
        ["Side handstand pike dismount", "Kicks to a handstand off the side of the beam and lands.", "Builds on the 3/4 side dismount from Dynamos."],
        ["Cartwheel and round off dismount", "Gets off the end of the beam with a cartwheel or a round off.", "Taking floor skills off the beam's end with control."]
      ],
      floor: [
        ["Chassé, leap and full turn", "A gliding step into a leap, then a full spin.", "Chassé (\"sha-SAY\") is a gliding step. These dance pieces are part of every floor routine."],
        ["Power hurdle round off rebound stick", "A skipping step into a round off, a small bounce, then a stuck landing.", "The round off is the start of most tumbling passes. The rebound teaches athletes to bounce up afterward."],
        ["Run, hurdle, round off, rebound, stick", "The same skill with a running start.", "More speed means more power, and more control needed to land it."]
      ],
      vault: [
        ["Run, punch springboard up to whale mat", "Bounces off the board onto a tall, rounded soft mat.", "The soft mat stands in for the vault table while athletes learn to get up and over."],
        ["Cartwheel entry to handstand on wall mat", "Turns in like a cartwheel and lands in a handstand against a mat.", "This is the start of a round off entry, used in more advanced vaults."],
        ["Run, punch springboard to handstand flatback", "Runs, bounces, and goes up to a handstand, landing flat on soft mats.", "The full beginner vault, putting together everything from earlier classes."]
      ]
    }
  },

  // ---------- Trampoline & Tumbling (TNT) · coed ----------
  "firecrackers": {
    program: "tnt", name: "Firecrackers", color: "var(--tnt-fire)", badge: "Preschool TNT · Coed",
    facts: ["Preschool", "Coed"],
    summary: "Our preschool trampoline and tumbling class. Little athletes learn to bounce, land and roll safely, with soft mats and plenty of fun.",
    focus: "Big goal for this class: safe bouncing and safe landings. Every trampoline skill later starts with knowing how to land.",
    skills: {
      rod: [
        ["Forward roll down incline", "A forward roll down a wedge-shaped mat, chin tucked.", "The slope helps with the roll and teaches athletes to tuck the chin to protect the neck."],
        ["Cartwheel hop over with mat", "Puts both hands on a soft mat and hops the feet over to the other side.", "The first step toward a cartwheel: weight on the hands while the legs travel over."],
        ["Donkey kicks (handstand drill)", "Hands on the floor, kicks both feet up behind like a donkey.", "Builds arm strength and comfort being upside down. It's the start of a handstand."]
      ],
      dmt: [
        ["3 straight jumps", "Three tall, straight bounces in a row.", "A straight jump in the same spot is the base of every trampoline skill."],
        ["Safe landing stick", "Lands on the mat with bent knees and doesn't move the feet.", "Knowing how to land safely is the first thing we teach on any trampoline."],
        ["Running and skipping", "Learning to run and skip with good form.", "The run is what powers the double mini later on."]
      ],
      tramp: [
        ["Straight jumps", "Bounces straight up and down in the middle of the trampoline.", "Staying in the middle and in control keeps athletes safe as the bounces get higher."],
        ["Seat drop with learning mat", "Bounces down to sitting with legs straight out, on a soft mat.", "The first drop skill. The learning mat cushions it while athletes learn the shape."],
        ["Table bounce to stand with learning mat", "Bounces onto hands and knees, then back up to standing, using a soft mat.", "Teaches changing position while bouncing and coming back to the feet safely."]
      ]
    }
  },
  "tnt-1": {
    program: "tnt", name: "TNT 1", color: "var(--tnt-1)", badge: "Trampoline & Tumbling · Coed",
    facts: ["Level 1", "Coed"],
    summary: "The first grade-school TNT level. Athletes learn jumping shapes, the run and hurdle onto the double mini, and their first linked drops on the trampoline.",
    focus: "Big goal for this class: control before height. Athletes learn to bounce in one spot and land safely before anything gets bigger.",
    skills: {
      rod: [
        ["3/4 cartwheel", "A cartwheel shape with legs not yet all the way overhead.", "A real cartwheel needs strong arms and straight legs. This step builds both."],
        ["3/4 handstand", "Kicks the legs up most of the way, not straight up yet.", "Builds arm strength and comfort being upside down before a full handstand."],
        ["Forward roll on floor", "A forward roll with no wedge to help.", "Now the athlete makes all the momentum."]
      ],
      dmt: [
        ["Tuck and straddle jumps", "Jumps with knees pulled in (tuck) or legs out wide (straddle).", "Making shapes in the air builds control and core strength."],
        ["Run to hurdle punch mount", "Runs, does a skip-step (hurdle), and bounces onto the double mini with both feet.", "This is how every double mini pass starts. A good hurdle gives a safe, straight bounce."],
        ["Safe landings", "Comes off the double mini and lands on the mat with bent knees, feet still.", "Most of the safety on the double mini happens at the landing."]
      ],
      tramp: [
        ["Tuck and straddle jumps", "The same jump shapes, now on the big trampoline.", "Holding a shape while bouncing higher takes more control."],
        ["Seat drop to table drop with learning mat", "Goes from a seat drop to a hands-and-knees drop, using a soft mat.", "Linking two drops teaches timing and body control."],
        ["Seat drop to 1/2 turn stand up", "From a seat drop, bounces up and turns halfway around to land standing.", "The first turning skill. Turning while bouncing takes body awareness."]
      ]
    }
  },
  "tnt-2": {
    program: "tnt", name: "TNT 2", color: "var(--tnt-2)", badge: "Trampoline & Tumbling · Coed",
    facts: ["Level 2", "Coed"],
    summary: "Athletes build on level 1: full cartwheels, handstands against the wall, jumps in a row on the double mini, and three trampoline skills linked together.",
    focus: "Big goal for this class: linking skills. Doing several jumps or drops in a row, with control, is a big step up.",
    skills: {
      rod: [
        ["Kick up to handstand on wall with mat", "Kicks up to a handstand against the wall, with a mat for support.", "Builds the strength and courage to go upside down on their own."],
        ["Cartwheel on floor", "A full cartwheel with legs going over the top.", "A cornerstone skill. The round off comes from the cartwheel."],
        ["Back roll off mat", "A backward roll down a raised mat.", "The first backward skill. The slope helps while athletes learn to push with their hands."]
      ],
      dmt: [
        ["3 tuck jumps", "Three tuck jumps in a row on the double mini.", "Linking jumps builds rhythm and control."],
        ["3 straddle jumps", "Three straddle jumps in a row.", "Wide, controlled shapes in the air without losing the bounce."],
        ["Jump to dive roll down elevated incline", "Bounces off the double mini into a forward roll down a raised wedge mat.", "Teaches reaching forward and rolling out safely after flight."]
      ],
      tramp: [
        ["10 straight jumps to control stop", "Ten bounces in a row, then stops on command by bending the knees.", "Stopping on purpose is one of the most important safety skills on trampoline."],
        ["Seat drop to stand up without learning mat", "A seat drop and back to standing, no soft mat this time.", "The same skill as level 1, now without the cushion."],
        ["Seat drop to table drop to forward roll", "Links a seat drop, a hands-and-knees drop and a forward roll.", "Three skills in a row: timing, control and comfort rolling on a bouncy surface."]
      ]
    }
  },
  "tnt-3": {
    program: "tnt", name: "TNT 3", color: "var(--tnt-3)", badge: "Trampoline & Tumbling · Coed",
    facts: ["Level 3", "Coed"],
    summary: "Our most advanced level here. Round offs on rod floor, back and stomach drops on trampoline, and the first coach-spotted flips.",
    focus: "Big goal for this class: getting ready to flip. A coach spots every flipping skill at this stage, and strong basics keep flips safe.",
    skills: {
      rod: [
        ["Run or power hurdle to round off", "Runs, skip-steps into a round off: like a cartwheel, but landing with feet together.", "The round off starts most tumbling passes and leads to back handsprings."],
        ["Independent kick up to handstand", "Kicks up to a handstand with no wall or help.", "Balancing a handstand alone takes real strength and control."],
        ["Back roll on floor", "A backward roll on flat floor.", "No slope to help now. Athletes have to push through their hands."]
      ],
      dmt: [
        ["Introduce spotted flipping skills", "First flips on the double mini, with a coach helping by hand.", "A coach spots every flip at this stage so athletes learn the right shape safely."],
        ["Jump back to bottom, back roll down incline", "Bounces backward and goes into a back roll down a wedge mat.", "Gets athletes comfortable moving backward after a bounce, a step toward back flips."],
        ["Run to hurdle punch tuck jump mount", "Runs, hurdles onto the double mini and does a tuck jump.", "Adds a shape to the mount, building power and control."]
      ],
      tramp: [
        ["Back drops", "Lands flat on the back, then bounces back up to standing.", "A safe, flat landing on the back is a building block for flips."],
        ["Stomach drops", "Lands flat on the stomach, arms in front, then bounces back up.", "Builds body control in a flat position."],
        ["Introduce spotted flipping skills", "First flips on the trampoline, with a coach spotting.", "Flips come only after the drops are solid, and always with a coach at first."]
      ]
    }
  }
};
const GLOSSARY = [
  ["Bars", "Uneven bars. Gymnasts swing, circle and hold themselves on a raised bar."],
  ["Beam", "Balance beam. A narrow beam about 4 inches wide. Kids start on low beams and lines on the floor."],
  ["Vault", "A run, a bounce off a springboard, and a skill over or onto a mat or table."],
  ["Floor", "The springy floor where rolls, handstands, cartwheels and dance happen."],
  ["Leo", "Short for leotard. In our gymnastics classes, the leo color shows which class your athlete is in."],
  ["Stick", "A landing with no hop, step or wobble. Coaches will shout \"stick it!\""],
  ["Cast", "On bars, swinging the legs back and pushing the hips away from the bar."],
  ["Pullover", "Pulling up and over the bar to end up on top of it."],
  ["Back hip circle", "A backward circle around the bar, hips staying close to it."],
  ["Glide swing", "Swinging under the low bar with feet skimming forward. Leads to the kip."],
  ["Kip", "A key bar skill that gets a gymnast from hanging to on top of the bar. It comes after these classes."],
  ["Underswing dismount", "Swinging under the bar and letting go to land."],
  ["Relevé", "Said \"ruh-luh-VAY.\" Rising up onto the balls of the feet."],
  ["Lever", "Tipping forward on one leg, arms reaching down, like a teeter-totter. Leads to a handstand."],
  ["Chassé", "Said \"sha-SAY.\" A gliding, galloping step."],
  ["Hurdle", "A skip-like step used to start a round off or cartwheel with power."],
  ["Round off", "Like a cartwheel, but both feet land together facing the way you came. It starts most tumbling passes."],
  ["Rebound", "A small bounce straight up right after a landing."],
  ["Punch", "A quick, springy bounce off the floor or springboard."],
  ["Springboard", "The bouncy board in front of the vault."],
  ["Flatback", "Falling from a handstand flat onto the back on soft mats, body straight and tight."],
  ["Whale mat", "A tall, rounded soft mat. It stands in for the vault table while kids learn."],
  ["Incline mat", "A wedge-shaped mat. Rolling downhill makes new skills easier."],
  ["3/4 handstand", "Kicking most of the way up to a handstand but not straight up yet."],
  ["Silver", "A level in competitive gymnastics. Spirals learn a Silver-level bar routine."],
  ["Progression", "The small steps that lead to a skill. Each class on this page lists 3 steps per event, in order."],
  ["TNT", "Short for Trampoline & Tumbling, our coed program on rod floor, double mini and trampoline."],
  ["Rod floor", "A long, springy tumbling strip. It's bouncier than regular floor and helps athletes learn tumbling skills."],
  ["Double mini", "A small trampoline with two parts. Athletes run, bounce on the first part, and do a skill off the second onto a mat."],
  ["Mount", "On the double mini, the first bounce onto the trampoline after the run."],
  ["Learning mat", "A soft mat placed on the trampoline to cushion new drops while athletes learn them."],
  ["Drop", "Landing on the trampoline somewhere other than the feet, like sitting or on the back, then bouncing back up."],
  ["Seat drop", "Bouncing down to sitting with legs straight out, then back up."],
  ["Table drop", "Landing on hands and knees in a tabletop shape, then bouncing back up."],
  ["Back drop", "Landing flat on the back on the trampoline, then bouncing back up."],
  ["Stomach drop", "Landing flat on the stomach, arms in front, then bouncing back up."],
  ["Control stop", "Stopping a bounce on purpose by bending the knees. A key trampoline safety skill."],
  ["Spotted", "A coach is hands-on, helping the athlete through the skill. Every new flip starts spotted."],
  ["Donkey kick", "Hands on the floor, kicking both feet up behind. A first step toward a handstand."],
  ["Dive roll", "A forward roll that starts with a small jump forward, hands reaching first."]
];

const PRESCHOOL = [
  ["Gym Jumpers", "Ages 2–3 · 45 min", "Pre-gymnastics · Independent", "Confidence, coordination, and listening skills."],
  ["Gyminators", "Age 3 · 45 min", "Beginner", "Strength and coordination, plus age-appropriate skills on all events."],
  ["Gym Kids", "Age 4 · 45 min", "Beginner", "Building confidence on all events."],
  ["Mini Stars", "Ages 3–5", "Advanced · By coach referral", "Skill steps, strength, and technique on all events."]
];

