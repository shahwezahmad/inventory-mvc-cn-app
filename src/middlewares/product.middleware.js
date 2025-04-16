import {body, validationResult} from 'express-validator'

export const productMiddleware = async (req, res, next) => {
    let {productName, productDesc, productPrice, imgUrl} = req.body

    // let errors = []
    // if(!productName || !productName.trim())  errors.push('Enter Product name')
    // if(!productDesc || !productDesc.trim()) errors.push('Enter product description')
    // if( parseFloat(productPrice) < 1) {
       
    //     errors.push('Price cannot be less than 1')
    // }
    // if(!imgUrl) errors.push('Enter image url')
    //     try {
    //          let validUrl = new URL(imgUrl)
    //         } catch (error) {
    //         errors.push('Enter valid URL')
    //     }

    // define rule
        let rules = [
            body('productName').notEmpty().withMessage('Enter product name'),
            body('productDesc').notEmpty().withMessage('Enter product description'),
            // body('productPrice').isFloat({gt:0}).withMessage('Enter correct price'),
            body('imgUrl').isURL().withMessage('Enter valid URL')

        ]

    // run rules
        await Promise.all( rules.map( rule => rule.run(req) ))

        let errorResult = validationResult(req).array()[0]?.msg

    //  check result

        if(errorResult) {
           return res.render('new-product', {errorMessage: errorResult})
        }

        next()
}