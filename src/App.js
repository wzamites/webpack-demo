import * as ReactHabitat from 'react-habitat';
import Component from './components/Component';

class Main extends ReactHabitat.Bootstrapper {
  constructor() {
    super();

    // Create a new container builder:
    const builder = new ReactHabitat.ContainerBuilder();

    // Register a component:
    builder.register(Component).as('Component');

    // Finally, set the container:
    this.setContainer(builder.build());

  }
}

export default new Main()

document.getElementById('root').innerHTML = '<h1>Edit me and keep your state</h1>';

if (module.hot) {
  module.hot.accept()
}
