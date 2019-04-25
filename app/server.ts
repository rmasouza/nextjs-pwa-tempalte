/* tslint:disable:no-console */
// import "reflect-metadata";
import expressApp from './App';

const PORT = 3005;

expressApp.nextServer.prepare().then(() => {
    expressApp.app.listen(PORT, () => {
        console.log('Express server listening on port http://localhost:' + PORT);
    });
});
