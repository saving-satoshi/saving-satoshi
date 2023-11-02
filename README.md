# Saving Satoshi

Saving Satoshi is a light-hearted, first point of contact for developers of all ages that want to learn how bitcoin works.

At its core, this is a video game. But if you look beneath the surface, it's much more than that. It’s an interactive science fiction story designed to inspire a generation to fall in love with bitcoin. The goal is to be a 0-to-1 experience that transmits the cultural values of bitcoin. We do this by immersing learners into a fictional world that they navigate with technical lessons.

Gameplay is made up of a mix of technical text and code-based challenges. The challenges should be doable for anyone with basic coding skills.

Learners will complete test-driven, repl-based lessons, while learning some bitcoin history along the way. Beginners can breeze through the basics while more advanced learners can dive into the harder challenges and easter eggs.

Bitcoin is serious, but this game is designed to be fun. We hope you enjoy what we have created and welcome contributions.

Now be quick, Satoshi needs you!

## Contributing

To contribute to the project, use issues and discussions in this GitHub repo (`saving-satoshi/saving-satoshi`), or join [our Discord channel](https://discord.gg/DC8Dys4G3h) in the [Bitcoin Design Community](https://bitcoin.design/).

Generally, we have five tracks in this project:

- Story
- Lessons
- Design
- Code
- Translation

The more these are in tune with each other, the better the final user experience. We are currently still in a phase where we try to bring everything together in a coherent and interesting storyline.

The design for this project is handled in [this Figma file](https://www.figma.com/file/LqjK3Tpvd9KJ4buFArCJBQ/Saving-Satoshi?node-id=0%3A1&t=HMELTIqCz6Nh68LI-1).

Images are generated via AI tools (initially [DiffusionBee](https://diffusionbee.com), now [Midjourney](http://midjourney.com)). Images and prompts are organized in [this Figma file](https://www.figma.com/file/0Fg2IiEbLI5o8juawKqkJM/Saving-Satoshi-images?type=design&node-id=407%3A1645&mode=design&t=F4DSAV8n0IOtJYOW-1). See [Guidelines for Image Generation](https://leaf-singer-0fc.notion.site/Guidelines-for-Image-Generation-3e965c7156ec4699b8c8f77ca61df102) for more info.

## Translation support

To help with translations and review head over to our translation [README.md](https://github.com/saving-satoshi/saving-satoshi/tree/master/i18n/README.md)

## Local development setup

To run this project locally:

1. First, make sure you have NodeJS version 16.13.0 or higher installed. Check `node -v`. Node [installation instructions](https://nodejs.org/en/download/package-manager/)
2. Install this repository `git clone https://github.com/saving-satoshi/saving-satoshi.git`
3. Change into the directory `cd saving-satoshi`
4. Run `yarn install` to download the required code libraries
5. Run `yarn build` to build
6. Run `yarn start` or `yarn dev` to spin up the development environment
7. Open `http://localhost:3000` in your browser to access the site

## Roadmap

This project was started during the [Bitcoin Designathon](http://event.bitcoin.design) in October 2022. It then continued with the [bolt.fun Legends of Lightning Tournament](https://makers.bolt.fun/project/saving-satoshi).

Our first goal is to launch a V1 that provides a great basic experience around 2 chapters with lessons. Then we'd like to get feedback from the community to ensure that we are building something that resonates. Ideally, we'd then like to make necessary adjustments and open up contributions to everyone.

Some ideas we have for the future

- Build out 10 chapter lessons
- Extract lessons into their own repository for independent editing
- Authentication using private keys
- Real-time collaboration with other players via public keys
- Built in REPLs (possibly with repl.it)
- Collaborative challenges
- More advanced lessons for learners looking to go deeper
- Localization to other languages if there is interest

Thank you so much for your interest in the project. We'd love to hear your feedback.

## License

Saving Satoshi is released under the terms of the MIT license. See [LICENSE](https://github.com/ecurrencyhodler/saving-satoshi/blob/master/license) for more information or see https://opensource.org/licenses/MIT.
