import { asyncView, asyncComponent } from '@/router/utils';

const configRouter = configRoutes();

function configRoutes() {
  return [
    {
      path: '/',
      components: {
        default: asyncView('Index'),
      },
      children: [
        {
          path: '',
          name: 'Index',
          components: {
            default: asyncView('index/Index'),
          },
        },
      ],
    },
    {
      path: '/play',
      components: {
        default: asyncView('Index'),
      },
      children: [
        {
          path: '',
          name: 'Play',
          components: {
            default: asyncView('play/Play'),
          },
        },
      ],
    },
    {
      path: '/result',
      components: {
        default: asyncView('Index'),
      },
      children: [
        {
          path: '',
          name: 'Result',
          components: {
            default: asyncView('result/Result'),
          },
        },
      ],
    },
  ];
}

export default configRouter;
