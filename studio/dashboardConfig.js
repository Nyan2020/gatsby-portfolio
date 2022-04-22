export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6261fb08bae9027d73aadbc6',
                  title: 'Sanity Studio',
                  name: 'gatsby-portfolio-studio-t8h34qet',
                  apiId: '3f214c66-ae3a-4dbb-b7ef-c82ceafedced'
                },
                {
                  buildHookId: '6261fb08d8391c76fd265308',
                  title: 'Portfolio Website',
                  name: 'gatsby-portfolio-web-35dtcxmo',
                  apiId: '91fcde47-61f5-4026-b532-c23d0a176d1f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Nyan2020/gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://gatsby-portfolio-web-35dtcxmo.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
