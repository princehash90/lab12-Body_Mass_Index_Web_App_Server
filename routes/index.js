const express = require('express');

const router  = express.Router();// this will figure out to run in response to a request

//get request to the homepage
router.get('/', (req, res) => {
    //name of the handlebar file
    res.render('index',{title: 'Body Mass Index Calculator'})
})

router.get('/calculate', (req, res) => {

    const formData = req.query// req will take the query parameter and convert into an object

    const height =formData.height// getting the height
    const weight = formData.weight// getting the weight

    if (!weight || !height || weight<0 || height<=0) {// validation to check if the user entered
        //number more than 0,
        //checking if the user entered number more than 0
        res.render('errors', {error: 'Please enter valid positive numbers for weight and height'})
        //this error message will be displayed on a new template of the user enters 0 or height and weight be less 0
    }else {

        const Bmi = weight / (height * height)// calculating bmi
        const formattedBmi = Bmi.toFixed(2)//converting two decimal places

        res.render('result', {// this will open another template that this display the Bmi
            Bmi: formattedBmi,
            title: 'Body Mass Index Calculator',
        })
    }
})

module.exports = router;