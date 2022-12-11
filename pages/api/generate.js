import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const completion = await openai.createCompletion({
    model: "text-davinci-002",
    prompt: generatePrompt(req.body.animal),
    temperature: 0.6,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(animal) {
    return `Suggest the disadvantages of my next career move.

    Job 1: Chemistry teacher
    Good aspects: Intellectually challenging, interacting with people
    Bad aspects: Low paid, poorly respected

    Job 2: Project manager
    Good aspects: Higher level skills such as management
    Bad aspects: Little prospect for promotion

    Job 3: Software developer
    Good aspects: Pays well, intellectually challenging
    Bad aspects: Takes a long time to learn

    Job 4: ${animal}
    Good aspects: Lets me retire early, enables me to travel the world, very transferable skills
    Bad aspects:`;
}

  // const capitalizedAnimal =
  //   animal[0].toUpperCase() + animal.slice(1).toLowerCase();

//   return `Suggest three names for an animal that is a superhero.

// Animal: Cat
// Names: Captain Sharpclaw, Agent Fluffball, The Incredible Feline
// Animal: Dog
// Names: Ruff the Protector, Wonder Canine, Sir Barks-a-Lot
// Animal: ${capitalizedAnimal}
// Names:`;

