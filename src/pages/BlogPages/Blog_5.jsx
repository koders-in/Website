import React from 'react'
import Fade from 'react-reveal/Fade';
import './Blog_5.scss'
import {HashRouter, Link} from "react-router-dom";
import Image2 from '../../Images/arrow_left.svg'
import Image1 from '../../Images/seo_1.jpg'
import Image3 from '../../Images/seo_2.jpg'
import Footer from '../../components/Footer/Footer';

function Blog5() {    

    return (
        <div className="blogSEO">
            <div className="headimage">
                <Fade top>
                <img src={Image1} alt="" /></Fade>
            </div>
            <Fade bottom>
            <div className="backbutton">
                <HashRouter>
                <Link to="/blog">
                    <img src={Image2} alt="" />
                    <p>Back</p>
                </Link>
                </HashRouter>
            </div>
            <div className="heading">
                <h1>What you need to know about <span>SEO</span> before starting a website?</h1>
            </div></Fade>
            <Fade bottom>
            <div className="section1">
                <div className="para1">
                    <p><span>SEO</span> or <span>Search Engine Optimization</span> is the process of improving 
                    the quantity and quality of search traffic to your website or 
                    product through organic search engine results. Google has a 
                    crawler that gathers data about everything that can be found on 
                    the Internet. The search engine crawlers bring back the query 
                    in binary code to the search engine to build an index. This 
                    index is then fed into an algorithm which tries to match all 
                    that data user queries. You need to know SEO before starting a 
                    bus.iness website. To start a software development website, you 
                    need to know your clients and SEO will guide you all the way.</p>
                    <br />
                    <p>The majority (over 65%) of search engine users are more likely 
                    to be clicked on the top 5 suggestions in the search engine 
                    results pages (SERPS). To take full advantage of this and guide 
                    traffic to your business website or your customers to your online 
                    store. To improve sales and recognition within the software development 
                    market, your business needs to appear in one of the top positions.</p>
                    <br />
                    <p>SEO is a tool to improve the overall user experience and usability 
                    of a website, especially a business webpage, while creating it. With 
                    the rise of the digital world, users have begun to trust search engines 
                    completely. Having a presence in the top positions of google rankings 
                    in thein the the keywords the user is looking for, increases the reliability 
                    of the website and thus your business. SEO is good for the social promotion 
                    of your software development website.</p>
                </div>
            </div>
            </Fade>

            <Fade bottom>
            <div className="image2">
                <img src={Image3} alt="" />
            </div></Fade>

            <Fade bottom>
            <div className="section2">
                <div className="para1">
                    <p>You need to remember some aspects of SEO while creating content for 
                    a website which are stated below;</p>
                    <ol>
                        <li>
                            <p><span>Create Persona -</span> Creation of client personas will 
                            help you build a marketing strategy by sketching out who the 
                            buyers are, what goals they wish to achieve with the content, 
                            and even the situations they are faced with. A persona is a 
                            fictional representation of actual clients and the needs . It is 
                            created in the early stages of product development or redesign. 
                            Personas are important because they drive decisions by taking 
                            in consideration the common user needs as well as the client 
                            needs and bringing them to notice while planning even before 
                            design has actually started. A buyer persona is a fictional 
                            representation of an ideal client, their backgrounds, challenges, 
                            expectations, goals,etc based on market research and real data. 
                            Understanding ideal customers is vital to take the risk for growth 
                            and marketing in the software development industry.</p>
                        </li>
                        
                        <li>
                            <p><span>Keyword Search - </span> Keyword research is the method 
                            of finding and analyzing actual search words that people look up 
                            in Google, Yahoo, Bing or other search engines. The actual terms 
                            provide insight into the way people think and help form a content 
                            strategy and even a marketing strategy for their business. Keyword 
                            research tells you what people care about and if you use the right 
                            SEO tools, you would be able to get into the mindset of people. 
                            This will let your company identify and sort your content into topics 
                            that your client and their audience would appreciate. Then these topics 
                            can dictate which keywords to target.</p>
                        </li>

                        <li>
                            <p><span>Search Intent - </span> Search intent is the term used to describe 
                            the reason behind an online search. The purpose of search is search intent. 
                            Is someone searching because they want an answer to their question? Are they 
                            looking to visit a specific domain? Or, are they searching because they want 
                            to buy a product? Are they looking for places to go eat? Different types of 
                            searches to form parts of the user journey. Over the years, Google and other 
                            search engines have tried for years to makeyears make its algorithm  better 
                            and improve the user experience by understanding the search intent. Google 
                            ranks pages that fit the search term well and understand the search intent 
                            behind the specific user search query. It is essential to make sure your blog 
                            post or webpage fits the search intent of your audience. The intent can be of 
                            different types: informational, navigational, commercial, transactional.</p>
                        </li>

                        <li>
                            <p><span>How to Integrate Keywords - </span> You can use keywords in lots of 
                            places in your content. You can integrate keywords in title tags, meta 
                            description tags, meta keywords, headers, subheaders, page content, 
                            link text, and even embedded file names. You need to know that as you’re 
                            designing the website and writing  content, you should not overload the 
                            keywords in all available spots. Overloading content with keywords is going 
                            to turn your website less usable for the target user. Use keywords in places 
                            that are relevant to your user to improve your website’s usability. It’s vital 
                            to ensure that your content fits both what people are searching for, and the 
                            search intent of your target user. Ensure your blog post or web page is 
                            informational when required but can lead people to your sales pages if they are 
                            looking to buy one of your products.</p>
                        </li>
                    </ol>
                </div>
            </div>
            </Fade>

            <div className="footer">
                <Footer/>
            </div>
        </div>
    )
}

export default Blog5
