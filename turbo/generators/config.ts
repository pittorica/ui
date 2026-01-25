import type { PlopTypes } from '@turbo/gen';

/**
 * Turbo generator configuration for creating new React UI libraries.
 *
 * @param plop - The Plop API instance.
 */
export default function generator(plop: PlopTypes.NodePlopAPI): void {
  plop.setGenerator('react-lib', {
    description: 'Generates a new React UI library with Vite',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (e.g. box, button, card):',
        validate: (input: string) => {
          if (input.includes(' ')) return 'The name cannot contain spaces';
          if (!input) return 'The name is required';
          return true;
        },
      },
    ],
    actions: [
      {
        type: 'addMany',
        destination: 'packages/{{name}}-react',
        base: 'templates/react-lib',
        templateFiles: 'templates/react-lib/**',
      },
    ],
  });
}
