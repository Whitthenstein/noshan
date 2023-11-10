# ノシャン (Noshan) - Notion Clone

## Table of Contents

- [ノシャン (Noshan) - Notion Clone](#ノシャン-noshan---notion-clone)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
    - [Built With](#built-with)
  - [Features](#features)
  - [Contact](#contact)

## Overview

[![Project Overview](/public/images/noshan-overview.jpg)](https://noshan.vercel.app/)

_Live demo can be found [here](https://noshan.vercel.app/)._

This is a project that aims to be a simple clone of the core functionality of the Notion note taking website.

Users need to sign up and log in to utilize the note-taking features of the website. Users can achieve this by using a Github account SSO or a simple email registration.

<img src="/public/images/noshan-login.gif" width="35%" />

Noshan allows users to create and edit notes. Entering "/" inside the editor reveals a popup with options for different headings, bullet points, etc.

<img src="/public/images/noshan-editor.gif" width="35%" />

There are also options to add a cover image to the note and/or an icon (emoji).

<img src="/public/images/noshan-cover-icon.gif" width="35%" />

Once a note is deleted, it goes to the <mark> _Trash_</mark> section. Selecting one of the notes opens it in the editor and shows options to delete the note forever or to restore it.

<img src="/public/images/noshan-trash.gif" width="35%" />

There is also a search functionality that lets users search through all the existing notes.

<img src="/public/images/noshan-search.gif" width="35%" />

Clicking on the <mark> _Settings_</mark> button reveals a popup with an option to switch the theme of the website.

<img src="/public/images/noshan-theme.gif" width="35%" />

Each note can have any number of child notes, and this is supported recursively for every note.

<img src="/public/images/noshan-recursive-pages.gif" width="35%" />

Users also have the ability to publish a note to the web. This note will appear as read-only.

<img src="/public/images/noshan-publish.gif" width="35%" />

<br>
<br>
By doing this project, I had the opportunity to try new platforms like Edgestore and Convex, as well as practice other skills I've acquired in Typescript, React, Next, and TailwindCSS.

<!-- TODO:
    1. Describe my overall experience in a couple of sentences.
    2. List a few specific technical things that I learned or improved on.
    3. Share any other tips or guidance for others attempting this or something similar.
 -->

### Built With

[![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next JS](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

## Features

- Real-time database
- Notion-style editor
- Light and Dark mode
- Infinite children documents
- Trash can & soft delete
- Authentication
- File upload, deletion and replacement
- Icons for each document (changes in real-time)
- Full mobile responsiveness
- Publish notes to the web
- Cover image of each document
- Recover deleted files

## Contact

[![LinkedIn](https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/joao-m-branco/)

[My Portfolio Website](https://whitthenstein.vercel.app/)

<!-- TODO: Include icons and links to your RELEVANT, PROFESSIONAL 'DEV-ORIENTED' social media. LinkedIn and dev.to are minimum. -->
