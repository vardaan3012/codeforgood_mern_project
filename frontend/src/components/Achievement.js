import React from 'react';
import ReactDom from 'react-dom';
import Card from './Cards';
import "./index.css";
// import Sdata from './Sdata';

const Achievement = () => {
    return (
        <>
            <h1 className="heading_style"> ACHIEVEMENTS </h1>
            <div className="container">
                <Card imgsrc=
                    "https://im.indiatimes.in/content/2021/Jan/gunas-gulling_5ffd85fc53343.jpg?w=660&h=444&cc=1"
                    // {require("./images/achieve1.jpg")}
                    // title=" Title "
                    // sname = 'Name 1'
                    // link="https://www.netflix.com/in/title/81133092"
                    hdesc="Gunavathy Chandrasekaran"
                    desc="41-year-old Gunavathy Chandrasekaran, from Tamil Nadu, a resident of Sivakasi, discovered her passion for quilling early in life and worked with enthusiasm towards her goal. Gunavathy survived a polio attack when she was only two years old. She was married off at 16."
                />
                <Card imgsrc=
                    "https://im.indiatimes.in/content/2021/Jan/859936-75467-ltvwcavwan-1512239889_5ffd87094a21c.jpg?w=725&h=380&cc=1"
                    //  {require("./images/achieve5.jpg")}
                    // title=" Title "
                    // sname = 'Name 2'
                    // link="https://www.netflix.com/in/title/80990668?source=35"
                    hdesc="Anita Devi"
                    desc="Anita Devi, better known now as the ‘Mushroom lady of Bihar,’ started growing mushrooms in 2010 to earn for her family. Today, she runs ‘Madhopur Farmer’s Producers Company.This woman entrepreneur has not only changed the fortune of her family but also helped many women in her village and surrounding towns."
                />
                <Card imgsrc=
                    "https://im.indiatimes.in/content/2021/Jan/MILK2_5ff6941988963_5ffd87603fb09.jpg?w=600&h=400&cc=1"
                    //{require("./images/achieve2.jpg")}
                    // title=" Title "
                    // sname = 'Name 3'
                    // link="https://www.netflix.com/in/title/80057281" 
                    hdesc=" Navalben Dalsangbhai Chaudhary"
                    desc="Navalben, who hails from the village of Nagana in the district of Banaskantha, defied all odds, to cause a mini-revolution in her district. She made a record by selling milk worth Rs 1.10 crore in 2020, earning a profit of Rs 3.50 lakh per month. In 2019, she sold Rs 87.95 lakh worth of milk."
                />
                <Card imgsrc=
                    "https://hihindia.org/wp-content/uploads/2020/12/bea8e692-4bdc-46ae-a304-30a8da2b26fa.jpg"
                    // {require("./images/achieve3.jpg")}
                    // title=" Title "
                    // sname = 'Name 4'
                    link="https://www.netflix.com/in/title/81152788"
                    hdesc="Kashal Panchyat"
                    desc="in India’s villages, the one common factor is the availability of cows and therefore plenty of cow dung. This has multiple uses, as fertilizer, pesticides and more. At Kashal panchayat, however, we found a very unique use for cow dung – Dhoop or fragrance sticks made from dung!Five women of the Tejaswini self-help group are busy at all times of the day These are the women who came forward when the Hand in Hand India skilling team came up with an idea for an income-generating activity."
                />
                <Card imgsrc=
                    "https://hihindia.org/wp-content/uploads/2020/12/MG_2374-scaled.jpg"
                    // {require("./images/achieve4.jpg")}
                    // title=" Title "
                    // sname = 'Name 5'
                    link="https://www.netflix.com/in/title/81014532"
                    hdesc=" Taje Village"
                    desc="Taje village like its neighbouring villages described above, clearly depending on agriculture and the land. When the Mumbai- Pune expressway was built, many of these farming families had to sell their land and move to working in industrial areas such as Kamshet, Talegaon and such. However, the women members of these families did not get an opportunity to earn a living due to lack of education and skills.Our Village Uplift Programme is a nascent one in Taje, started in July 2020"
                />
            </div>

        </>

    );
}

export default Achievement