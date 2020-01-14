export default
    {
        name :'Taufik Rahadi.',
        headerTagline: [
                        'Hi 👋 You found me! I am Taufik Rahadi.',

                        'Junior Web Developer ',

                        'from Indonesia'
    ],
        //Contact Email
        contactEmail:'taufikrahadi1@gmail.com',
        abouttext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        aboutImage:`${process.env.PUBLIC_URL}/profile.jpeg`,
       ShowAboutImage:false,
       projects:[
           {
            id: 1,
            title:'Project One', //Project Title - Add Your Project Title Here
             service:'UI/UX Design', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc:"https://images.unsplash.com/photo-1558104631-0fa41a8f6c20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
             //Project URL - Add Your Project Url Here
             url:'https://github.com/taufikRahadi'
            },
            {
                id: 2,
                title: 'Project Two',
                service: 'Website Development',
                imageSrc: "https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'https://github.com/taufikRahadi'
            },
            { 
                id: 3,
                title: 'Project Three',
                service: 'Web App',
                imageSrc: "https://images.unsplash.com/photo-1511500118080-275313ec90a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'https://github.com/taufikRahadi'
            },
            {
                id: 4,
                title: 'Project Four',
                service: 'Branding',
                imageSrc: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url: 'https://github.com/taufikRahadi'
           }
        ],
        social: [
            {   name:'Github',
                url:'https://github.com/taufikRahadi'},
            {
                name: 'Instagram',
                url: 'https://www.instagram.com/taufik.rahadi/'
            }

        ]
    }