module.exports = {
    data: {
        name: "quote",
        description: "Sends a random Dwayne The Rock Johnson quote",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {

        const quotes = [
            "THE ROCK... IS... COOKING",
            "Its about drive, its about power, we stay hungry, we devour, put in the work, put in the hours, and take whats ours",
            "Its about drive, its about power",
            "Jabroni",
            "Know your role and shut your mouth",
            "You're nothing! You're a 7 foot, 500 pound piece of monkey crap!",
            "You better hide that big ass forehead",
            "Shut your mouth you thong wearing fatty!"
        ];
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
    
        await interaction.reply({ content: `${quote}`, ephemeral: false });
      },
}