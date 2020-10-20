import * as ReactHabitat from 'react-habitat';
import SkipLink from './components/SkipLink/SkipLink';

class Main extends ReactHabitat.Bootstrapper {
  constructor() {
    super();

    // Create a new container builder:
    const builder = new ReactHabitat.ContainerBuilder();

    // Register a component:
    builder.register(SkipLink).as('SkipLink');

    // Finally, set the container:
    this.setContainer(builder.build());

  }
}

export default new Main()
