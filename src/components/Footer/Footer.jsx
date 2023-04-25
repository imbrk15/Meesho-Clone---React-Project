import React from 'react'
import "./footer.css";
import Accordion from 'react-bootstrap/Accordion';

export default function Footer() {
    return (
        <div className='main'>
            <div className='container_footer'>
                <div className='child_container'>
                    <p style={{ fontSize: 32 }}><b>Shop Non-Stop on Meesho</b></p>
                    <p style={{ fontSize: 18 }}>
                        Trusted by more than 1 Crore Indians
                        <br />
                        Cash on Delivery | Free Delivery
                    </p>
                    <div className='image_store'>
                        <a target='/blank' href="https://play.google.com/store/apps/details?id=com.meesho.supply&pid=pow_website&c=pow&pow_click_page_type=HP&pow_distinct_id=185f39564e219f-0e66e6c01b8267-26021051-15f900-185f39564e396a"><img className='appstore' src={require("./appstore.png").default} alt="appstore" /></a>
                        <a target='/blank' href="https://apps.apple.com/us/app/meesho/id1457958492"><img className='playstore' src={require("./playstore.png").default} alt="playstore" /></a>

                    </div>
                </div>
                <div className='child_container' style={{ fontSize: 18 }}>
                    <p>Careers</p>
                    <p>Become a supplier</p>
                    <p>Hall of Fame</p>
                </div>
                <div className='child_container' style={{ fontSize: 18 }}>
                    <p>Legal and Policies</p>
                    <p>Meesho Tech Blog</p>
                    <p>Notice and returns</p>
                </div>
                <div className='child_container'>
                    <p style={{ fontSize: 20 }}><b>Reach out to us</b></p>
                    <div className='logo_media'>
                        <a target='/blank' href="https://www.facebook.com/meeshosupply"><img src={require("./logo/facebook.png").default} alt="facebook" /></a>
                        <a target='/blank' href="https://www.instagram.com/meeshoapp/"><img src={require("./logo/instagram.png").default} alt="instagram" /></a>
                        <a target='/blank' href="https://www.youtube.com/channel/UCaGHIRKYUYlaI_ZAt2hxpjw"><img src={require("./logo/youtube.png").default} alt="youtube" /></a>
                        <a target='/blank' href="https://www.linkedin.com/company/meesho/"><img src={require("./logo/linkedin.png").default} alt="linkedlin" /></a>
                        <a target='/blank' href="https://twitter.com/Meesho_Official/"><img src={require("./logo/twitter.png").default} alt="twitter" /></a>

                    </div>
                </div>
                <div className='child_container'>
                    <p style={{ fontSize: 20 }}><b>Contact Us</b></p>
                    <p style={{ fontSize: 14 }}>
                        Fashnear Technologies Private Limited,
                        <br />
                        CIN: U74900KA2015PTC082263
                        06-105-B, 06-102, (138 Wu)
                        <br />
                        Vaishnavi Signature, No. 78/9,
                        <br />
                        Outer Ring Road, Bellandur,
                        <br />
                        Varthur Hobli, Bengaluru-560103,
                        <br />
                        Karnataka, India
                        <br />
                        E-mail address:
                        <br />
                        query@meesho.com
                        <br />
                        © 2015-2022 Meesho.com
                    </p>
                </div>
            </div >
            <div className='accordian' >
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>More About Meesho</Accordion.Header>
                        <Accordion.Body>
                            <div className='container'>
                                <h4>Meesho: Affordable Online Shopping at Your Fingertips</h4>
                                <p>There are many benefits of shopping online. You can take your time and look at different options to find exactly what you want. It's easy to compare prices online and find exactly what you are looking for. And now with Meesho, you can shop for anything you want at the lowest prices in the market.  Even if you want to shop for cool gifts for your friends and family, there are many options that you can find on the Internet. </p>
                                <br />
                                <h4>A Huge Selection of Products Across All Categories</h4>
                                <p>We have a vast inventory of products ranging from apparel to cosmetics to home utility and kitchen products and more. With over 50 lakh products and 650+ product categories, Meesho is sure to have everything you need. In our latest collections, you will find all the popular items at an affordable price, so you can be confident you're getting the best deal. Whether you're in the market for new clothes, accessories, or just some daily-use items for home, Meesho has what you need.</p>
                                <br />
                                <h4>Latest Women's Fashion Is Right Here</h4>
                                <br />
                                <h4>Women Ethnic Wear Collection</h4>
                                <p>When it comes to women's ethnic wear, we have everything you need to find the perfect outfit for any occasion. Whether you're looking for traditional sarees and blouses, or something more modern like suits or casual Kurtis, we have it all. And with our stunning collection of accessories, footwear, and jewellery sets, it's easy to put together a complete look that will turn heads at your next wedding or festive celebration. So come and shop with us today!
                                </p>
                                <br />
                                <h4>Western Wear for Women</h4>
                                <p>Meesho is the best place to find fashionable and affordable western wear for women. With a constantly updating inventory of casual, formal, and partywear dresses, jeans, tops, T-shirts, skirts, and more, Meesho has all the latest trending outfits you're looking for--plus funky jewelry and accessories. You'll never have to worry about overspending or not being able to find something you love!</p>
                                <br />
                                <h4>Accessories, Jewellery, and Footwear</h4>
                                <p>You may have your favorite outfit picked out but accessories can really add a sense of style and individuality that make you stand out! With so many types of accessories available, it can be difficult to find the perfect piece for yourself. Fortunately, Meesho has a wide variety of jewellery sets, handbags, belts, heels, casual footwear, watches, etc. With so many options, you'll be sure to find the perfect accessories for any outfit!</p>
                                <br />
                                <h4>Men's Ethnic Wear</h4>
                                <p>Do you need a new Sherwani? Are you heading to a wedding and want to look your best? If you answered yes, look no further than our latest men’s ethnic wear collection! Whether you want a Kurta set, Pajamas, Sherwani set, or any other Indian attire, we have an array of budget-friendly styles that are sure to fit your needs.</p>
                                <br />
                                <h4>Largest Collection of Menswear and Accessories </h4>
                                <br />
                                <h4>Mens Western Wear</h4>
                                <p>Through our large selection of menswear products we offer, you are sure to find something you love. We have a vast collection of t-shirts, jeans, polos, coats, and shirts. We have sizes in stock that fit any man’s body type, and the best news of all is that they’re all affordable. We make it easy to find exactly what you’re looking for, too. Our search tool lets you filter our selection down by size, color, material, and more. </p>
                                <br />
                                <h4>Ethnic Wear for Men</h4>
                                <p>If you're on the hunt for a new sherwani or any other type of Indian attire for an upcoming wedding, our latest men's ethnic wear collection has got you covered. We have a range of budget-friendly styles to choose from, so you're sure to find something that fits your needs. Whether you're looking for a Sherwani set, Kurta pajamas, or an ethnic jacket, we've got it all!</p>
                                <br />
                                <h4>Mens Accessories and Footwear</h4>
                                <p>When it comes to fashion, no one knows how to help you gain the upper hand in style better than us. Shop our online collection of accessories for men and pick out something for yourself or for your other half! Our accessories collection includes items like men's wallets, cufflinks, bags for men, and more. So don't waste another minute and get yourself some accessories today! Do not forget to check out our latest footwear for men. We have everything from colorful sneakers to formal footwear to flip-flops for men.</p>
                                <br />
                                <h4>Affordable and Top Quality Beauty Products</h4>
                                <p>With so many different cosmetics brands, products, and items to choose from, it can be overwhelming when trying to find the right makeup for you. Sometimes it's nice to try out new products, but if you buy bad quality makeup that breaks you out, it's not very cost-effective. We are only concerned with the best products. We only stock up on the best makeup and skincare that won't damage your skin or make you break out. We have everything from foundations, makeup removers, concealers to primer, mascara, eye shadow, and lipsticks.</p>
                                <br />
                                <h4>Cute and Trendy Kidswear Collection</h4>
                                <p>Kids grow so fast, it feels like you're constantly buying new clothes for them! Whether you're looking for the latest trends or just want something practical and affordable, our kidswear collection has got you covered. You'll find everything from rompers and dresses for girls to sets and jeans for boys. Plus, we have ethnic wear and accessories for kids of all ages. And don't forget to check out our baby care collection for all the basic products for baby care.</p>
                                <br />
                                <h4>Shop Home & Kitchen Products, Electronics, and More</h4>
                                <br />
                                <h4>Kitchen Products</h4>
                                <p>If you're looking to spice up your kitchen, then you've come to the right place! We carry a wide variety of home and kitchen essentials like cooking utensils and serveware, kitchen storage, appliances like blenders, choppers, cooktops, and more! We are dedicated to providing the highest quality products for a reasonable price. We're confident that we have everything you're looking for in your kitchen or home! </p>
                                <br />
                                <h4>Home Utility and Essentials</h4>
                                <p>It's always a good idea to switch up your home's style every now and then - it keeps things fresh and also allows you to try out new trends. But of course, you never want to spend more money than you have to. That's where Meesho comes in! We've got amazing prices on all kinds of home furnishing items like bedsheets, curtains, cushions, and more. Plus, we have a constantly rotating selection of the best home decor items so you can always stay on top of the latest trends. So be sure to check out our home decor section today!</p>
                                <br />
                                <h4>Electronics and Accessories</h4>
                                <p>At Meesho, we give you access to a huge selection of gadgets and essentials for your electronic devices. Here you'll find everything from chargers and headphones to data cables and even external battery packs. Every month, we offer different sales and discounts on products, allowing you to save on your favorite essentials. Here you can find the perfect gift for everyone on your list without breaking your budget!</p>
                                <br />
                                <h4>Health, Fitness & Sports</h4>
                                <p>We know how important it is to take care of your health and keep yourself fit. We have everything you need to start your journey towards fitness. At our store, you will find a wide variety of fitness equipment at very affordable prices. We have everything you need to get started with your home workouts, including dumbbell sets, exercise bands, exercise mats, skipping ropes, sports kits and more!</p>
                                <br />
                                <h4>Office Supplies and Stationery </h4>
                                <p>We have a wide range of stationery items which will help you stay tidy and organised. You can buy notebooks, diaries and notepads and craft supplies which are great for school and college, or you can buy office supplies which are great for adults. We have a variety of pens, pencils, and other stationery supplies to ensure that you have what you need to write down your thoughts, make lists and so much more.</p>
                                <br />
                                <h4>Get the Meesho App for Hassle Free Online Shopping </h4>
                                <p>If you want a seamless shopping experience, you should also consider downloading Meesho App. While you may think that it's unnecessary to have an app for shopping, there are plenty of features that will make your life easier. If you find yourself preferring to shop from home, this is the app for you. It makes shopping online easier than ever. You can browse through a plethora of products and even get great deals with more discounts than you can count. You can even share products you like with your friends on social media in just seconds.</p>
                                <br />
                                <h4 style={{ color: '#F43397' }} >Download Meesho App Now</h4>
                                <br />
                                <h4>Become a Reseller: Start Making Money In Three Simple Steps</h4>
                                <p>Now you know all about different categories and products Meesho has to offer. It's time to explore and understand Meesho reselling option. Apart from using Meesho as an online shopping platform, you also have the option to start your online business with us. Here’s how you can begin your entrepreneurial journey.

                                    Browse: You can register for a new account or log in to an existing one on the Meesho app or website. Once you're logged in, you can browse through our catalog and select products that you want to purchase at wholesale rates!

                                    Share: With a single click, you can share catalogs and product images over Whatsapp, Facebook, or Instagram to your contacts using the share option.

                                    Earn: After sharing the products and catalogs with your customers, you will start getting orders from them. You can add a profit margin to Meesho’s prices and quote that to your customers.This will be your profit. You can quote product prices with an added margin, which will include a profit for you. Once you place the orders on your customer’s behalf, Meesho will take care of the delivery process for you.</p>
                                <br />
                                <h4>Don't Miss Out! Start Shopping Online on Meesho Now</h4>
                                <p>Meesho offers multiple payment options including debit and credit cards, UPI, and COD to help you with a smooth checkout process. If you are unhappy with any of the products you order you can immediately return them and get a full refund with no questions asked. In case you have any queries or concerns, simply send us an email at query@meesho.com. Or you can contact us on social media through Facebook, Instagram, or Twitter. We're here to help you! </p>
                                <br />
                                <h4 style={{ color: '#F43397' }}>Online Shopping</h4>
                                <br />
                                <h5>Home & Living</h5>
                                <p style={{ color: '#F43397' }}>Curtains & Sheers | Round Cushions | Sofa Covers | Cotton Bedsheets | Bedding Sets | Pillow Covers | Decorative Items | Duvet Covers | Blankets | Home Temple | Yoga mats | Bean Bags | Single Bed Sheet | Cushions | Face Towels | Cotton Towel | Trays | Coasters</p>
                                <br />
                                <h5>Men Ethnicwear</h5>
                                <p style={{ color: '#F43397' }}>Men Dhoti Kurtas | Men Indo Western Dresses | Men Velvet Sherwanis | Men Dhotis</p>
                                <br />
                                <h5>Women Western Wear</h5>
                                <p style={{ color: '#F43397' }}>Women Frocks | Long Tops Women | Tshirt Dresses | Designer Gown | Pencil Skirts | Women Trousers | Flared Jeans | Women Sweatshirts | Shrugs | Capris | Jacket Dresses | Fancy Ladies Sweater | Chikankari Palazzos | Ankle Length Leggings | Tights | Printed Leggings | Kaftans | Maternity Wear | Denim Women Shorts | Black Jeggings | Short Night Dress | Women Night Suits | Lace Lingerie Sets | Lingerie Sets | Push Up Bra | Stockings | Black Camisoles | Cotton Bathrobes | Satin Night Suit | Body shapers | Women Pyjamas | Swimwear | Women Jackets | Women Thermal Set</p>
                                <br />
                                <h5>Women Ethnicwear</h5>
                                <p style={{ color: '#F43397' }}>Silk Saree | Puff Sleeve Blouses | Chikankari Kurtis | Designer Lehenga | Sharara | Phulkari Dupatta | Petticoats | Abaya | Black Kurta | Velvet Shawls | Blouse Piece | Kurti Fabric | Designer Suits</p>
                                <br />
                                <h5>Women Footwear</h5>
                                <p style={{ color: '#F43397' }}>Women Slippers | Bellies | Juttis & Mojaris</p>
                                <br />
                                <h5>Women Accessories</h5>
                                <p style={{ color: '#F43397' }}>Hoop Earrings | Stud Earrings Women | Oxidised Ring | Handbags | Umbrellas | Cateye Sunglasses | Jewellery Set | Slingbags | Trolley Bags | Hijabs | Ankle Socks Women | Clutches | Hair Accessories | Maangtika | Pouches | Duffle Bags | Pashmina Shawls | Bindis | Waist Bags | Rucksacks | Briefcases | Small Travel Bags | Potlis | Nosepins | Gold Bangles | Bridal Anklets | Chandbali Earrings | Necklaces | Multi Necklace</p>
                                <br />
                                <h5>Electronics & Accessories</h5>
                                <p style={{ color: '#F43397' }}>Android Smart Watches | On Ear Headphones | Bluetooth Speakers | Bluetooth Earphones | Sport Headphones | CCTV Cameras | Spy Cameras | Keyboard | Laptop Bags | Mouse | Laptop Accessories | Pen Drives | Earphones | Fast Charging Power Banks | Headphones | Data Cables | Car Mobile Holders | Car Mobile Holders | Mobile Chargers | Speakers | Diwali Lightings | Microphone | Memory Cards | Digital Photo Frames | Dongle | VR Box</p>
                                <br />
                                <h5>Men Western Wear</h5>
                                <p style={{ color: '#F43397' }}>Cotton Shorts Men | Denim Jeans Men | Formal Trousers Men | Men Active Shorts | Sport Jackets Men | Printed Tshirts | Formal Shirts Men | Sleeveless Sweatshirts Men | Leather Jackets Men | Grey Blazers | Men Sweaters | Sport Tracksuits Men | Vests | Printed Briefs Men | Men Trunks | Wool Jackets Men</p>
                                <br />
                                <h5>Men Footwear</h5>
                                <p style={{ color: '#F43397' }}>Reebok Sports Shoes Men | Men Sandals | Leather Loafers Men</p>
                                <br />
                                <h5>Men Accessories</h5>
                                <p style={{ color: '#F43397' }}>Leather Watches Men | Gold Jewellery Men | Hair Spray For Men | Men Keychains | Men Socks | Men Scarves | Men Wrist Bands | Men Crossbody Bags | Men Shirt Studs</p>
                                <br />
                                <h5>Kids</h5>
                                <p style={{ color: '#F43397' }}>Kids Lunch Boxes | Kids Ethnic Jackets | Kids Blazers | Rompers | Kids Kurtis & Kurtas | Kids Salwar Suit Sets | Kids Ethnic Gowns | Tshirts Boys | Girls Stylish Tops</p>
                                <br />
                                <h5>Baby</h5>
                                <p style={{ color: '#F43397' }}>Baby Pillows | Baby Towels | Baby Hanging Cradle | Baby Sleeping Bag | Baby Blanket</p>
                                <br />
                                <h5>Home & Kitchen</h5>
                                <p style={{ color: '#F43397' }}> Toaster | Mixer Grinder | Cookers | Juicer | Food Processors | Roti Maker | Sandwich Maker | Kettles | Hand Blender | Table Cover | Napkins Holder | Kitchen Mat | Kitchen Towel | Aprons | Kitchen Gloves | Racks & Holders | Spice Racks | Jars & Container | Water Bottles | Thermos & Flasks | Lunch Boxes | Salt & Pepper Shakers | Knives | Food Strainers | Choppers | Mashers | Graters | Cutlery | Chopping Boards | Kitchen Scissors | Ice Cube Trays | Measuring Cups | Tongs | Ice Cream Scoops | Funnels | Trivets</p>
                                <br />
                                <h5>Personal Care & Wellness</h5>
                                <p style={{ color: '#F43397' }}>Tummy trimmer | Makeup Kits | Hair Color | Hair Steamers | Hair Care | Oral Care | Beard Oil | Deodorants | Eye Lenses | Soap | Oximeter | Bb Cream | Body Scrub | Olive Oils | Talcum Powder | Face Steamers | Compact | Nail Cutter | Lip Balm</p>

                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}
