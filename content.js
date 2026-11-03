// Win Kids Parent Guide content.
// Edit the text in this file to change what parents see. Keep the quotes and commas as they are.
// Each skill is: ["Name", "What it looks like", "Why it matters"]

const EVENT_INFO = {
  bars: "Bars build grip, arm and core strength. Most of the work is learning to swing and to hold her own body weight.",
  beam: "Beam builds balance and focus. Every skill is learned on the floor or a low beam first, then moves higher.",
  floor: "Floor is where rolls, handstands and cartwheels live. These shapes show up on every other event too.",
  vault: "Vault is about running fast, bouncing off the springboard, and landing safely. Soft mats stand in for the vault table at first."
};

const CLASSES = {
  "gym-girls": {
    name: "Gym Girls", leo: "pink", leoName: "Pink leo", age: "Ages 5–6", len: "45 min", level: "Beginner",
    summary: "Her first grade-school class. She is learning to hold her own body weight, to land safely, and to feel comfortable upside down.",
    focus: "Big goal for this class: a strong body and a fearless start. Strength and confidence come before the flashy skills.",
    skills: {
      bars: [
        ["Tuck hang", "Hangs from the bar with knees pulled up to her chest.", "Builds grip and tummy strength. Every bar skill depends on being able to hang on."],
        ["Support hold", "Holds herself up on top of the bar with straight arms.", "This is home base on bars. Almost every bar skill starts or finishes in this position."],
        ["Cast", "From the support hold, swings her legs back and pushes her hips away from the bar.", "The cast is how gymnasts make their own swing. It leads straight into later skills like the back hip circle."]
      ],
      beam: [
        ["Front support straddle mount", "Pushes up on her arms and swings one leg over to sit on the beam.", "Teaches a safe, controlled way to get on the beam."],
        ["Forward walks", "Walks tall along the beam, eyes forward.", "Balance and focus. Walking well is the base for every beam skill."],
        ["Straight jump dismount", "Jumps off the end of the beam and lands with feet together.", "Safe landings are one of the first things we teach, so she knows how to get down on purpose."]
      ],
      floor: [
        ["Forward roll down incline", "A somersault down a wedge-shaped mat.", "The slope helps her roll, and she learns to tuck her chin to protect her neck."],
        ["3/4 handstand", "Kicks her legs up most of the way, not straight up yet.", "Builds arm strength and comfort being upside down before a full handstand."],
        ["3/4 cartwheel", "A cartwheel shape with legs not yet all the way overhead.", "A real cartwheel needs strong arms and straight legs. This step builds both."]
      ],
      vault: [
        ["Running and skipping", "Learning to run with good form.", "All of the power in vault comes from the run."],
        ["Stretch jump stick", "Jumps straight up and lands without moving her feet.", "\"Stick\" means a landing with no wobble or step. Good landings keep gymnasts safe."],
        ["Wall handstand", "A handstand using a wall for support.", "Lets her practice a straight, tight body upside down without worrying about falling over."]
      ]
    }
  },
  "cartwheels": {
    name: "Cartwheels", leo: "blue", leoName: "Blue leo", age: "Ages 6+", len: "55 min", level: "Level 1 · Beginner",
    summary: "She has the basics. Now she adds new positions, her first circle on the bar, and her first springboard bounces.",
    focus: "Big goal for this class: more control. Skills that used to need a coach's hand start to happen on her own.",
    skills: {
      bars: [
        ["Straddle hang", "Hangs from the bar with legs open in a wide V.", "Builds core strength and flexibility for swinging skills."],
        ["Chin hold, 5 seconds", "Holds her chin above the bar with bent arms for five seconds.", "Pulling strength. She will need it to pull herself over the bar in a pullover."],
        ["Back hip circle with help", "Circles backward around the bar with a coach assisting.", "Her first full circle on bars and one of the key skills in a beginner bar routine."]
      ],
      beam: [
        ["Backward walks", "Walks backward along the beam.", "Harder than it looks because she can't see where she's going. Builds body awareness."],
        ["Needle lever", "Tips forward on one leg while the other leg lifts high behind her.", "Teaches control and flexibility. It's a step toward a handstand on the beam."],
        ["Walk on toe (relevé)", "Walks up on the balls of her feet.", "Relevé (\"ruh-luh-VAY\") builds ankle strength and balance. It's used in nearly all beam work."]
      ],
      floor: [
        ["Forward roll on floor", "A somersault on flat floor, no wedge to help.", "She now makes all the momentum herself."],
        ["Back roll off mat", "A backward somersault down a raised mat.", "Her first backward skill. The slope makes it easier while she learns to push with her hands."],
        ["3/4 handstand and 3/4 cartwheel", "The same shapes as before, now cleaner and stronger.", "Repeating a skill until it's clean is normal. That's how it becomes safe to go further."]
      ],
      vault: [
        ["Handstand flatback on mat", "Kicks to a handstand and falls flat onto her back on a stack of soft mats, body straight.", "Teaches the tight, straight body that real vaults need."],
        ["Run and punch on springboard", "Runs and bounces off the springboard with both feet.", "\"Punch\" means a quick, springy bounce. It's what makes a vault go up."],
        ["Kick up to handstand on wall", "Kicks up into a handstand against the wall without help.", "Builds the strength and courage to go upside down on her own."]
      ]
    }
  },
  "dynamos": {
    name: "Dynamos", leo: "red", leoName: "Red leo", age: "Ages 6+", len: "55 min", level: "Level 2 · Intermediate",
    summary: "Real gymnastics skills start to show up: full cartwheels and handstands on floor, a back hip circle on her own, and swings on bars.",
    focus: "Big goal for this class: doing it alone. Skills that had a coach's help or a mat to help now happen independently.",
    skills: {
      bars: [
        ["Glide swings", "Swings under the low bar with her feet skimming forward.", "This swing is the base for the kip, a key skill in competitive gymnastics later on."],
        ["Pullover to support (with mat)", "Pulls herself up and over the bar, stepping off a mat to start.", "The pullover is how gymnasts get on the bar. The mat helps until she's strong enough to go from the floor."],
        ["Back hip circle", "Circles backward around the bar without help.", "The skill she started with a coach's help in Cartwheels, now done on her own."]
      ],
      beam: [
        ["Lever to 3/4 handstand", "Tips forward and kicks most of the way to a handstand on the beam.", "Takes her floor handstand work up onto the beam."],
        ["Forward and backward kicks", "Kicks one leg high while walking forward or back.", "Balance while moving, plus flexibility."],
        ["Stretch or split jump, 3/4 side dismount", "Jumps on the beam, then gets off by kicking partway to a handstand off the side.", "Jumping and landing on a narrow beam takes a lot of control."]
      ],
      floor: [
        ["Cartwheel", "A full cartwheel with legs going over the top.", "A cornerstone skill. The round off, a skill in her next class, comes from the cartwheel."],
        ["Handstand", "A full handstand on the floor.", "The handstand shows up on every event. It's probably the most important skill in gymnastics."],
        ["Back roll on floor", "A backward somersault on flat floor.", "No slope to help now. She has to push through her hands."]
      ],
      vault: [
        ["Sprint, punch, straight jump stick", "Sprints, bounces off the springboard, and lands a straight jump without moving.", "Speed, bounce and landing all in one."],
        ["Kick handstand flatback (on her own)", "Kicks to a handstand and falls flat onto soft mats without help.", "Same shape as Cartwheels, now independent."],
        ["Jump to dive roll down incline", "Jumps off the board and dives into a forward roll down a wedge mat.", "Teaches her to reach forward and roll out safely after flight."]
      ]
    }
  },
  "spirals": {
    name: "Spirals", leo: "black", leoName: "Black leo", age: "Ages 6+", len: "55 min", level: "Advanced",
    summary: "Our most advanced grade-school class. She puts skills together into routines, including a full bar routine at a competition level.",
    focus: "Big goal for this class: linking skills. Doing one skill is very different from doing four in a row with good form.",
    skills: {
      bars: [
        ["Straight or straddle glide swing", "A longer, cleaner glide swing with legs together or apart.", "Gets her ready for the kip, the next big bar skill."],
        ["Independent pullover", "Pulls up and over the bar from the floor, no mat to help.", "A big strength milestone. Many kids work on this one for a long time."],
        ["Silver bar routine", "Pullover, 2 casts, back hip circle, underswing dismount.", "This is a real competition routine (Silver level). Underswing dismount means she swings under the bar and lets go to land."]
      ],
      beam: [
        ["Stretch, split and tuck jumps", "Three different jumps on the beam.", "Jumps with different shapes test her balance and landing."],
        ["Side handstand pike dismount", "Kicks to a handstand off the side of the beam and lands.", "Builds on the 3/4 side dismount from Dynamos."],
        ["Cartwheel and round off dismount", "Gets off the end of the beam with a cartwheel or a round off.", "Taking floor skills off the beam's end with control."]
      ],
      floor: [
        ["Chassé, leap and full turn", "A gliding step into a leap, then a full spin.", "Chassé (\"sha-SAY\") is a gliding step. These dance pieces are part of every floor routine."],
        ["Power hurdle round off rebound stick", "A skipping step into a round off, a small bounce, then a stuck landing.", "The round off is the start of most tumbling passes. The rebound teaches her to bounce up afterward."],
        ["Run, hurdle, round off, rebound, stick", "The same skill with a running start.", "More speed means more power, and more control needed to land it."]
      ],
      vault: [
        ["Run, punch springboard up to whale mat", "Bounces off the board onto a tall, rounded soft mat.", "The soft mat stands in for the vault table while she learns to get up and over."],
        ["Cartwheel entry to handstand on wall mat", "Turns in like a cartwheel and lands in a handstand against a mat.", "This is the start of a round off entry, used in more advanced vaults."],
        ["Run, punch springboard to handstand flatback", "Runs, bounces, and goes up to a handstand, landing flat on soft mats.", "The full beginner vault, putting together everything from earlier classes."]
      ]
    }
  }
};
const GLOSSARY = [
  ["Bars", "Uneven bars. Gymnasts swing, circle and hold themselves on a raised bar."],
  ["Beam", "Balance beam. A narrow beam about 4 inches wide. Kids start on low beams and lines on the floor."],
  ["Vault", "A run, a bounce off a springboard, and a skill over or onto a mat or table."],
  ["Floor", "The springy floor where rolls, handstands, cartwheels and dance happen."],
  ["Leo", "Short for leotard. At Win Kids, the leo color shows which class your child is in."],
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
  ["Progression", "The small steps that lead to a skill. Each class on this page lists 3 steps per event, in order."]
];

const PRESCHOOL = [
  ["Gym Jumpers", "Ages 2–3 · 45 min", "Pre-gymnastics · Independent", "Confidence, coordination, and listening skills."],
  ["Gyminators", "Age 3 · 45 min", "Beginner", "Strength and coordination, plus age-appropriate skills on all events."],
  ["Gym Kids", "Age 4 · 45 min", "Beginner", "Building confidence on all events."],
  ["Mini Stars", "Ages 3–5", "Advanced · By coach referral", "Skill steps, strength, and technique on all events."]
];

