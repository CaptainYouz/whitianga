import * as Components from './components';
import 'virtual:windi.css';

export default {
  install(app: any): void {
    const componentNames: string[] = Object.keys(Components);

    Object.values(Components).forEach((component: any, index: number) => {
      app.component(componentNames[index], component);
    });
  }
};

export * from './components';
