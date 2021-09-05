const app = Vue.createApp({
   
    data() {
        return {
            firstName: 'John',
            lastName: 'Round', 
            email: 'john@gmail.com',
            gender: 'male',
            city: 'New York',
            country: 'United States',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }

    }, 

   methods: {
        async getUser() {
           const res =  await fetch('https://randomuser.me/api/');
               
           const { results } = await res.json();

           console.log(results);

           console.log(results);
           

            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last, 
            this.email = results[0].email,
            this.gender = results[0].gender,
            this.city = results[0].location.city,
            this.country = results[0].location.country,
            this.picture = results[0].picture.large

        }
   }, 

});

app.mount('#app');