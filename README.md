# Practice with Functions

1. Fork this repository
2. Go to **Settings** in your repository and select **Actions > General**
3. Select the **Allow all actions and reusable workflows** option and click **Save**
4. Go to the **Actions** tab and click the green button if actions are not yet enabled

Each of the 4 folders under _exercises/_ contains an HTML file and a JavaScript file. Open the HTML file in your browser, and work through the exercises as instructed in the corresponding JavaScript file. Each .js file Gives instructions for what you should see in the console if you're on the right track.

To run all the tests, you can run:

```bash
npx jest .
```

To check whether your code for a particular part is correct (for example, for part 2), you can run the following command in your console:

```bash
npx jest __tests__/test_part2.js
```

You can also lint your code with the following command:

```bash
npx eslint .
```

When you push your code to GitHub, GitHub _should_ also run the same set of tests and lints.