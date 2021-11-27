import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./product/Product";
import useStyles from './styles'

// const products =[
//     {id:1, name:'shoes', description:'running shoes',price:20, image:'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/5bc6230d24924736ab03ab4a009aed6c_9366/Fluidstreet_Shoes_Black_FW1703_01_standard.jpg'},
//     {id:2, name:'macbook', description:'Apple macbook',price:20, image:'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201907/Apple-MacBook-Air-and-MacBook-_1.jpeg'}
// ]

const Products =({ products,onAddToCart })=>{
    const classes = useStyles()

    return(
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify="center" spacing={4}>
                {products.map((product)=>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products