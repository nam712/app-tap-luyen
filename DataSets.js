export const workoutData={
    Beginner: [
        {
            name: "Functional Training", 
            duration: "2 Minutes", 
            calories: "1450 Kcal", 
            exercises: "3 Exercises", 
            image: require('./assets/home-pic/squat.png'), 
            content: 'Lorem ipsum dolor sit amet consectetur. Magnis pellentesque felis ullamcorper imperdiet.'            
        },
        {
            name: "Upper Body", 
            duration: "60 Minutes", 
            calories: "1320 Kcal", 
            exercises: "5 Exercises", 
            image: require('./assets/home-pic/upperbody.png'),
            content: 'Lorem ipsum dolor sit amet consectetur. Magnis pellentesque felis ullamcorper imperdiet.'   
        },
        {
            name: "Full Body Stretching", 
            duration: "45 Minutes", 
            calories: "1450 Kcal", 
            exercises: "5 Exercises", 
            image: require('./assets/home-pic/bodystretching.png'),
            content: 'Lorem ipsum dolor sit amet consectetur. Magnis pellentesque felis ullamcorper imperdiet.'   
        },
        {
            name: "Glutes & Abs", 
            duration: "12 Minutes", 
            calories: "120 Kcal", 
            exercises: "5 Exercises", 
            image: require('./assets/home-pic/glutesabs.png'),
            content: 'Lorem ipsum dolor sit amet consectetur. Magnis pellentesque felis ullamcorper imperdiet.'   
        },
    ],
    Intermediate: [
        {
            name: "Cardio fitness", 
            duration: "45 Minutes", 
            calories: "120 Kcal", 
            exercises: "5 Exercises", 
            image: require('./assets/home-pic/cardiofitness.png'),
            content: 'Lorem ipsum dolor sit amet consectetur. Magnis pellentesque felis ullamcorper imperdiet.'   
        },
        {
            name: "Circuit Training", 
            duration: "50 Minutes", 
            calories: "1300 Kcal", exercises: "5 Exercises", 
            image: require('./assets/home-pic/circuit.png'),
            content: 'Lorem ipsum dolor sit amet consectetur. Magnis pellentesque felis ullamcorper imperdiet.'   
        },
        {
            name: "Split Strength Training", 
            duration: "12 Minutes", 
            calories: "1250 Kcal", 
            exercises: "5 Exercises", 
            image: require('./assets/home-pic/splitstrength.png'),
            content: 'Lorem ipsum dolor sit amet consectetur. Magnis pellentesque felis ullamcorper imperdiet.'  
        },
  
        {
            name: "Resistance Training", 
            duration: "12 Minutes", 
            calories: "120 Kcal", 
            exercises: "2 Exercises", 
            image: require('./assets/home-pic/resistance.png'),
            content: 'Lorem ipsum dolor sit amet consectetur. Magnis pellentesque felis ullamcorper imperdiet.'   
        },
    ],
    Advanced: [
        { 
            name: "Upper Body Strength", 
            duration: "60 Minutes", 
            calories: "120 Kcal", 
            exercises: "5 Exercises", 
            image: require('./assets/home-pic/upperbodystrength.png'),
            content: 'Lorem ipsum dolor sit amet consectetur. Magnis pellentesque felis ullamcorper imperdiet.'   
        },
        {
            name: "Cardio boxing", 
            duration: "50 Minutes", 
            calories: "1350 Kcal", 
            exercises: "5 Exercises", 
            image: require('./assets/home-pic/cardioboxing.png'),
            content: 'Lorem ipsum dolor sit amet consectetur. Magnis pellentesque felis ullamcorper imperdiet.'   
        },
        {
            name: "Hypertrophy - Legs", 
            duration: "12 Minutes", 
            calories: "1250 Kcal", 
            exercises: "5 Exercises", 
            image: require('./assets/home-pic/hypertrophy-legs.png'),
            content: 'Lorem ipsum dolor sit amet consectetur. Magnis pellentesque felis ullamcorper imperdiet.'   
        },
        {
            name: "Rest or Active Recovery", 
            duration: "12 Minutes", 
            calories: "120 Kcal", 
            exercises: "2 Exercises", 
            image: require('./assets/home-pic/recovery.png'),
            content: 'Lorem ipsum dolor sit amet consectetur. Magnis pellentesque felis ullamcorper imperdiet.'   
        },
    ]
};
export const nutritionData = [
    {
        name: 'Carrot and orange smoothie', 
        duration: '10 Minutes', 
        calories: '70 Cal', 
        image: require('./assets/Nutrition/smoothie.png')
    },
    {
        name: 'Fruit smoothie', 
        duration: '12 Minutes', 
        calories: '120 Cal', 
        image: require('./assets/Nutrition/fruit.png')
    },
    {
        name: 'Salads with quinoa', 
        duration: '12 Minutes', 
        calories: '120 Cal', 
        image: require('./assets/Nutrition/salads.png')
    },
    {
        name: 'Delights with Greek yogurt', 
        duration: '6 Minutes', 
        calories: '200 Cal', 
        image: require('./assets/Nutrition/delights.png') 
    },
    {
        name: 'Baked salmon', 
        duration: '30 Minutes', 
        calories: '350 Cal', 
        image: require('./assets/Nutrition/baked.png') 
    },
];
export const mealplanData = [
    { 
        name: 'Avocado And Egg Toast', 
        duration: '15 Minutes',
        calories: '150 Cal', 
        image: require('./assets/Nutrition/toast.png'), 
        ingredients: '• Wholemeal bread\n• Ripe avocado slices\n• Fried or poached egg', 
        preparation: 'Sed earum sequi est magnam doloremque aut porro dolores sit molestiae fuga. Et rerum inventore ut perspiciatis dolorum sed internos porro aut labore dolorem At quia reiciendis in consequuntur possimus.'
    },
    { 
        name: 'Spinach And Tomato Omelette', 
        duration: '10 Minutes', 
        calories: '220 Cal', 
        image: require('./assets/Nutrition/omelette.png'), 
        ingredients: '• Spinach\n• Tomato\n• Eggs\n• Salt and pepper', 
        preparation: 'Beat eggs, add spinach and chopped tomato. Cook in a non-stick pan. Season with salt and pepper.'
    }, 
    { 
        name: 'Delights With Greek Yogurt', 
        duration: '6 Minutes', 
        calories: '200 Cal', 
        image: require('./assets/Nutrition/greekyogurt.png'), 
        ingredients: '• Greek yogurt\n• Honey\n• Mixed berries\n• Granola',
        preparation: 'In a bowl, add Greek yogurt, drizzle honey, and top with mixed berries and granola.'
    }, 
    {  
        name: 'Protein Shake With Fruits', 
        duration: '9 Minutes', 
        calories: '180 Cal', 
        image: require('./assets/Nutrition/proteinshake.png'), 
        ingredients: '• Protein powder\n• Banana\n• Milk or water\n• Mixed fruits',
        preparation: 'Blend protein powder, banana, milk or water, and mixed fruits until smooth.'
    } 
];
export const mealideaData = {
    Breakfast: [
        {
            name: "Spinach and tomato omelette", 
            duration: "10 Minutes", 
            calories: "220 Cal", 
            image: require('./assets/Nutrition/omelette.png') 
        },
        {
            name: "Fruit smoothie", 
            duration: "12 Minutes", 
            calories: "120 Cal", 
            image: require('./assets//Nutrition/fruit.png') 
        },
        {
            name: "green celery juice", 
            duration: "12 Minutes", 
            calories: "120 Cal",
            image: require('./assets/Nutrition/greencelery.png') 
        },
        {
            name: "Delights with Greek yogurt", 
            duration: "6 Minutes", 
            calories: "200 Cal", 
            image: require('./assets/Nutrition/greekyogurt.png')
        },
        {
            name: "Avocado and egg toast", 
            duration: "15 Minutes", 
            calories: "150 Cal", 
            image: require('./assets/Nutrition/toast.png') 
        },
    ],
    Lunch: [
        {
            name: "Salmon And Avocado Salad", 
            duration: "15 Minutes", 
            calories: "300 Cal", 
            image: require('./assets/Nutrition/Salmon-Avocado-Salad.png') 
        },
        {
            name: "Quinoa salad", 
            duration: "25 Minutes", 
            calories: "120 Cal", 
            image: require('./assets//Nutrition/salads.png') 
        },
        {
            name: "Burrito with vegetables", 
            duration: "6 Minutes", 
            calories: "250 Cal", 
            image: require('./assets/Nutrition/burrito-vegetables.png')
        },
        {
            name: "Teriyaki chicken with brown rice", 
            duration: "45 Minutes", 
            calories: "375 Cal", 
            image: require('./assets/Nutrition/chicken-rice.png') 
        },
        {
            name: "Baked salmon", 
            duration: "30 Minutes", 
            calories: "350 Cal",
            image: require('./assets/Nutrition/baked-salmon.png') 
        },
    ],
    Dinner: [
        {
            name: "Grilled Chicken Salad", 
            duration: "20 Minutes", 
            calories: "240 Cal", 
            image: require('./assets/Nutrition/grilled-chicken.png') 
        },
        {
            name: "Chickpea salad", 
            duration: "20 Minutes", 
            calories: "300 Cal", 
            image: require('./assets//Nutrition/chickpea-salad.png') 
        },
        {
            name: "Lentil soup", 
            duration: "30 Minutes", 
            calories: "200 Cal", 
            image: require('./assets/Nutrition/lentil-soup.png')
        },
        {
            name: "Turkey and Avocado Wrap", 
            duration: "15 Minutes", 
            calories: "230 Cal", 
            image: require('./assets/Nutrition/turkey-avocado-wrap.png') 
        },
        {
            name: "Chicken Breast Stuffed with Spinach ", 
            duration: "30 Minutes", 
            calories: "250 Cal",
            image: require('./assets/Nutrition/chicken-breast-stuffed.png') 
        },
    ]
};
export const faqs = [
    { question: 'Lorem ipsum dolor sit amet?', answer: 'Lorem hello de buas gsmrs' },
    { question: 'Consectetur adipiscing elit?', answer: 'Answer for question 2' },
    { question: 'Integer nec odio?', answer: 'Answer for question 3' },
    { question: 'Praesent libero?', answer: 'Answer for question 4' },
    { question: 'Sed cursus ante dapibus diam?', answer: 'Answer for question 5' }
];
export const communityData=[
    {
        name: 'Cycling Challenge', 
        duration: '15 Minutes', 
        calories: '100 Kcal',
        exercises:'Low' ,
        image: require('./assets/community/Challenge.png'),
        content: 'Lorem ipsum dolor sit amet consectetur. Magnis pellentesque felis ullamcorper imperdiet.'
    },
    {
        name: 'Power Squat', 
        duration: '14 Minutes', 
        calories: '100 Kcal',
        exercises:'High' ,
        image: require('./assets/community/Power-Squat.png'),
        content: 'Lorem ipsum dolor sit amet consectetur. Magnis pellentesque felis ullamcorper imperdiet.'
    },
    {
        name: 'Press Leg Ultimate', 
        duration: '15 Minutes', 
        calories: '100 Kcal',
        exercises:'Very high' ,
        image: require('./assets/community/Press-Leg-Ultimate.png'),
        content: 'Lorem ipsum dolor sit amet consectetur. Magnis pellentesque felis ullamcorper imperdiet.'
    },
    {
        name: 'Cycling',
        duration: '15 Minutes', 
        calories: '100 Kcal',
        exercises:'Low' , 
        image: require('./assets/community/Cycling.png'),
        content: 'Lorem ipsum dolor sit amet consectetur. Magnis pellentesque felis ullamcorper imperdiet.'
    },
]
export const forums = [
    { 
        title: 'Strength Training Techniques', 
        subtitle: 'Discussion on training methods', 
        time: 'Today 17:05' 
    },
    { 
        title: 'Nutrition and Diet Strategies', 
        subtitle: 'Meal planning, supplementation preferences', 
        time: 'Today 17:05' 
    },
    { 
        title: 'Cardiovascular Fitness', 
        subtitle: 'About different types of cardio workouts', 
        time: 'Today 17:05' 
    },
  ]