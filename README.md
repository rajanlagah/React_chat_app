## Purpose of app
I gave my self 24 hours to build something with service worker in use. So, I tried to implement chat app inspired from Google Chrome Developers
 video [here](https://www.youtube.com/watch?v=cmGr0RszHc8&t=1998s). 

<img alt='app_image' src="https://user-images.githubusercontent.com/20952569/69655456-8cb77f80-109c-11ea-9d8f-cd2f40ba9218.png" width="200">

## what it contains
In order to implement it i have to build chat app first. It is not full app like wapp or telegram. <br/>
It have one group where with 5-10 users that can do group chat.
I also have required server for this to. You can check that at  [here](https://github.com/rajanlagah/react_chat_app_server.git) 

## Features of service worker implemented.
- Cache
- Offline page<br/>
    <img alt="Offline page" src="https://user-images.githubusercontent.com/20952569/69655445-8923f880-109c-11ea-8b38-6a576ce07f3c.png" width=200 /> 
- Lifi handling ( not able to test it properly even at very low network)
    - example out put <br/>
    <img alt="Image for Lifi" src="https://user-images.githubusercontent.com/20952569/69655435-84f7db00-109c-11ea-9358-031c950cf02a.png" width=200 /> 
- App status

## Further improvemnts 
- UI (ofcourse)
- Add notification 
- Update App

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

