import { NumberPrompt, Select } from 'enquirer';

class Terminal {
  async question(name, message) {
    const prompt = new NumberPrompt({ name, message });
    return prompt.run();
  }

  async select(name, message, arrChoices) {
    const prompt = new Select({ name, message, choices: arrChoices });
    return prompt.run();
  }
}

export default new Terminal();
