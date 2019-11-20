# Okapi
Okapi - Your Intelligent Fashion Adviser

## Contributions workflow

1. Fork the repository (aka make a copy)

2. Clone the fork (aka download the copy)

3. Make a git branch

If you type `git status` you will see the branch name that you’re on, called `master`. In most projects, `master` is a special place where the most stable, reviewed, up-to-date code is. So, you’ll need to make your own branch:

`git branch a-descriptive-name`

Then switch to that branch:

`git checkout name-for-your-branch`

But what exactly is a branch? As a developer is working, they may want to be able to switch back and forth between the stable `master` code and the changes they’ve made. Branches let you do that. A branch is kind of like a fork on your computer. When you have your own branch, it’s a place where you can make changes without affecting `master`.

4. Make some commits (aka do the work)

`git status` will show you the files you changed.

`git add path-to-your-file` will allow you to pre-select the files you want to save. Add the files one at a time.

`git status` again to make sure you added the files you want to keep your work from

`git commit -m "some message here #123"` will group your changes together into a commit. The message should be short, describe the work that you did, and include the issue number that you are working on.

`git push origin name-for-your-branch` to save your work online. You’ll be prompted for your git username and password. Up until you type this command, your work has only been saved on your computer. After this, if you look at your Fork on GitHub, you should see your branch and commit:

[](https://miro.medium.com/max/1156/1*CheJwWanxM182iS3s1VOTg.png)

5. Open a Pull Request (aka PR)

To create one, go to your fork of the project, click on the Pull Requests tab, and click the big green “New Pull Request” button.

More details: https://medium.com/@jenweber/your-first-open-source-contribution-a-step-by-step-technical-guide-d3aca55cc5a6
