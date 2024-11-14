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
            calories: "130 Kcal", 
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
        image: require('./assets/Nutrition/smoothie.png'),
        ingredients: '• Protein powder\n• Banana\n• Milk or water\n• Mixed fruits',
        preparation: 'Blend protein powder, banana, milk or water, and mixed fruits until smooth.'
    },
    {
        name: 'Fruit smoothie', 
        duration: '12 Minutes', 
        calories: '120 Cal', 
        image: require('./assets/Nutrition/fruit.png'),
        exercises:'Easy',
        ingredients:'• 1/2 cup plain Greek yogurt\n• 1/2 cup almond milk\n• 1 banana\n• 1/4 cup mixed berries (strawberries, blueberries)\n• Honey (optional, to sweeten)' ,

        preparation: 'Blend protein powder, grade, milk or water, and mixed fruits until smooth.'
    },
    {
        name: 'Salads with quinoa', 
        duration: '12 Minutes', 
        calories: '120 Cal', 
        image: require('./assets/Nutrition/salads.png'),
        ingredients: '• Protein powder\n• Grade\n• Milk or sugar\n• Mixed fruits',
        preparation: 'Blend protein powder, grade, milk or sugar, and mixed fruits until smooth.'
    },
    {
        name: 'Delights with Greek yogurt', 
        duration: '6 Minutes', 
        calories: '200 Cal', 
        image: require('./assets/Nutrition/delights.png') ,
        ingredients: '• Wholemeal bread\n• Ripe avocado slices\n• Fried or poached egg', 
        preparation: 'Sed earum sequi est magnam doloremque aut porro dolores sit molestiae fuga. Et rerum inventore ut perspiciatis dolorum sed internos porro aut labore dolorem At quia reiciendis in consequuntur possimus.'
    },
    {
        name: 'Baked salmon', 
        duration: '30 Minutes', 
        calories: '350 Cal', 
        image: require('./assets/Nutrition/baked.png'),
        ingredients: '• Greek yogurt\n• Honey\n• Mixed berries\n• Granola',
        preparation: 'In a bowl, add Greek yogurt, drizzle honey, and top with mixed berries and granola.'
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
            image: require('./assets/Nutrition/omelette.png'), 
            ingredients:'• 2 eggs\n• 1/4 cup chopped spinach\n• 1/4 cup diced tomatoes\n• Salt and pepper to taste\n• 1 tsp olive oil'
        },
        {
            name: "Fruit smoothie", 
            duration: "12 Minutes", 
            calories: "120 Cal", 
            image: require('./assets//Nutrition/fruit.png'),
            ingredients:'• 1/2 cup plain Greek yogurt\n• 1/2 cup almond milk\n• 1 banana\n• 1/4 cup mixed berries (strawberries, blueberries)\n• Honey (optional, to sweeten)' 
        },
        {
            name: "green celery juice", 
            duration: "12 Minutes", 
            calories: "120 Cal",
            image: require('./assets/Nutrition/greencelery.png') ,
            ingredients:'• 1/2 cup plain Greek yogurt\n• 4 celery stalks\n• 1/2 cucumber\n• 1 green apple\n• 1 tbsp lemon juice\n• Water (as needed)'
        },
        {
            name: "Delights with Greek yogurt", 
            duration: "6 Minutes", 
            calories: "200 Cal", 
            image: require('./assets/Nutrition/greekyogurt.png'),
            ingredients:'• 1/2 cup plain Greek yogurt\n• 1 tbsp honey\n• 1/4 cup mixed nuts\n• 1 tbsp chia seeds\n• 1/4 cup fresh berries'
        },
        {
            name: "Avocado and egg toast", 
            duration: "15 Minutes", 
            calories: "150 Cal", 
            image: require('./assets/Nutrition/toast.png') ,
            ingredients:'• 1 slice whole grain bread\n• 1/2 avocado, mashed\n• 1 boiled or poached egg\n• Salt, pepper, and chili flakes to taste\n• 1 tsp olive oil'
        },
    ],
    Lunch: [
        {
            name: "Salmon And Avocado Salad", 
            duration: "15 Minutes", 
            calories: "300 Cal", 
            image: require('./assets/Nutrition/Salmon-Avocado-Salad.png') ,
            ingredients:'• 4 oz grilled salmon\n• 1/2 avocado, sliced\n• 2 cups mixed greens\n• 1 tbsp olive oil\n• 1 tbsp balsamic vinegar'
        },
        {
            name: "Quinoa salad", 
            duration: "25 Minutes", 
            calories: "120 Cal", 
            image: require('./assets//Nutrition/salads.png'),
            ingredients:'• 1 cup cooked quinoa\n• 1/4 cup diced cucumbers\n• 1/4 cup cherry tomatoes, halved\n• 1 tbsp lemon juice\n• Salt and pepper to tast\n' 
        },
        {
            name: "Burrito with vegetables", 
            duration: "6 Minutes", 
            calories: "250 Cal", 
            image: require('./assets/Nutrition/burrito-vegetables.png'),
            ingredients:'• 1 whole wheat tortilla\n• 1/4 cup black beans\n• 1/4 cup corn kernels\n• 1/4 cup diced bell peppers\n• Salsa and guacamole (for topping)'
        },
        {
            name: "Teriyaki chicken with brown rice", 
            duration: "45 Minutes", 
            calories: "375 Cal", 
            image: require('./assets/Nutrition/chicken-rice.png'),
            ingredients:'• 4 oz chicken breast, diced\n• 1/2 cup cooked brown rice\n• 2 tbsp teriyaki sauce\n• 1/4 cup broccoli florets\n• 1 tbsp sesame seeds' 
        },
        {
            name: "Baked salmon", 
            duration: "30 Minutes", 
            calories: "350 Cal",
            image: require('./assets/Nutrition/baked-salmon.png'),
            ingredients:'• 4 oz salmon fillet\n• 1 tbsp olive oil\n• 1 tbsp lemon juice\n• Salt, pepper, and garlic powder to taste\n• Fresh herbs (e.g., dill or parsley)'
        },
    ],
    Dinner: [
        {
            name: "Grilled Chicken Salad", 
            duration: "20 Minutes", 
            calories: "240 Cal", 
            image: require('./assets/Nutrition/grilled-chicken.png'),
            ingredients :'  • 4 oz grilled chicken breast\n• 2 cups mixed greens\n• 1/4 cup cherry tomatoes\n• 1 tbsp olive oil\n• 1 tbsp red wine vinegar'
        },
        {
            name: "Chickpea salad", 
            duration: "20 Minutes", 
            calories: "300 Cal", 
            image: require('./assets//Nutrition/chickpea-salad.png'),
            ingredients :'• 1 cup canned chickpeas, drained\n• 1/4 cup diced red onion\n• 1/4 cup diced cucumbers\n• 1 tbsp lemon juice\n• Salt and pepper to taste'
        },
        {
            name: "Lentil soup", 
            duration: "30 Minutes", 
            calories: "200 Cal", 
            image: require('./assets/Nutrition/lentil-soup.png'),
            ingredients:'• 1 cup dried lentils\n• 1/2 cup diced carrots\n• 1/2 cup diced celery\n• 1 tsp cumin powder\n• 4 cups vegetable broth'
        },
        {
            name: "Turkey and Avocado Wrap", 
            duration: "15 Minutes", 
            calories: "230 Cal", 
            image: require('./assets/Nutrition/turkey-avocado-wrap.png'),
            ingredients :'• 1 whole wheat tortilla\n• 4 slices deli turkey\n• 1/2 avocado, sliced\n• 1 tbsp hummus\n• Spinach leaves'
        },
        {
            name: "Chicken Breast Stuffed with Spinach ", 
            duration: "30 Minutes", 
            calories: "250 Cal",
            image: require('./assets/Nutrition/chicken-breast-stuffed.png'),
            ingredients :'• 4 oz chicken breast\n• 1/4 cup chopped spinach\n• 2 tbsp ricotta or cream cheese\n• 1 tbsp olive oil\n• Salt and pepper to taste'
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
        conclusion:'Plank With Hip Twist',
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
export const ArticlesData=[
    {
    name: 'Strength Training Tips', 
    duration: '15/9', 
    time: 'published on September 15', 
    image: require('./assets/Articles/Strength-Training.png'),
    content: 'Discover essential Strength Training Tips to maximize your workouts and achieve your fitness goals efficiently. Learn how to optimize your routine, prevent injuries, and unlock your full potential in the gym.',
    content1:'Plan your routine for the week. Focus on different muscle groups on different days to allow for adequate rest and recovery.',
    content2:'Begin your workout with a proper warm-up session. This could include light cardio exercises like jogging or jumping jacks, as well as dynamic stretches to prepare your muscles for the upcoming workout.'
},
{
    name: 'Healthy Weight Loss', 
    duration: '23/9', 
    time: 'published on September 23',  
    image: require('./assets/Articles/Healthy-Weight.png'),
    content: 'Discover essential Strength Training Tips to maximize your workouts and achieve your fitness goals efficiently. Learn how to optimize your routine, prevent injuries, and unlock your full potential in the gym.',
    content1:'Before starting any workout, plan your routine for the week. Focus on different muscle groups on different days to allow for adequate rest and recovery.',
    content2:'Begin your workout with a proper warm-up session. This could include light cardio exercises like jogging or jumping jacks, as well as dynamic stretches to prepare your muscles for the upcoming workout.'
},
{
    name: 'Unlock Your Gym Potential', 
    duration: '15/11', 
    time: 'published on November 15', 
    image: require('./assets/Articles/Gym-Potential.png'),
    content: 'Discover essential Strength Training Tips to maximize your workouts and achieve your fitness goals efficiently. Learn how to optimize your routine, prevent injuries, and unlock your full potential in the gym.',
    content1:'Before starting any workout, plan your routine for the week. Focus on different muscle groups on different days to allow for adequate rest and recovery.',
    content2:'This could include light cardio exercises like jogging or jumping jacks, as well as dynamic stretches to prepare your muscles for the upcoming workout.'
},
{
    name: 'From Beginner to Buff', 
    duration: '28/10', 
    time: 'published on October 28', 
    image: require('./assets/Articles/Beginner-Buff.png'),
    content: 'Discover essential Strength Training Tips to maximize your workouts and achieve your fitness goals efficiently. Learn how to optimize your routine, prevent injuries.',
    content1:'Focus on different muscle groups on different days to allow for adequate rest and recovery.',
    content2:'Begin your workout with a proper warm-up session. This could include light cardio exercises like jogging or jumping jacks, as well as dynamic stretches to prepare your muscles for the upcoming workout.'
},
{
    name: 'Strategies for Gym Success', 
    duration: '1/11', 
    time:'published on December 1',
    image: require('./assets/Articles/Strategies.png'),
    content: 'Discover essential Strength Training Tips to maximize your workouts and achieve your fitness goals efficiently. Learn how to optimize your routine, prevent injuries, and unlock your full potential in the gym.',
    content1:'Before starting any workout, plan your routine for the week. Focus on different muscle groups on different days to allow for adequate rest and recovery.',
    content2:'Begin your workout with a proper warm-up session. This could include light cardio exercises like jogging or jumping jacks.'
},
]