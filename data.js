/**
 * data.js
 * Centralized business configuration for Kadu Kaki's Kitchen.
 */

const businessConfig = {
    brandName: "Kadu Kaki's Kitchen",
    phone: "+91 7506121372",
    whatsappNumber: "917506121372", // Updated to match your actual phone number perfectly
    address: "Lord Shiva's Paradise, Kalyan West, Maharashtra 421301",
    area: "Kalyan West",
    timings: "Mon - Sun: 9:00 AM - 10:00 PM",
    fssai: "11521000000000", // Update this when you have the real one
    // SEO Highly Optimized Description:
    seoDescription: "Looking for the best homemade food and tiffin service in Kalyan West? Order authentic Maharashtrian meals, Puranpoli, Ukdiche Modak, and Diwali Faral with fast home delivery from Kadu Kaki's Kitchen.",
    // Menu Categories & Items
    menu: [
        {
            category: "🔥 Most Selling",
            items: [
                { name: "Regular Veg Tiffin", description: "Homely, fulfilling daily meal consisting of chapati, fresh sabji, dal, and rice.", image: "public/dishes/regular-veg-tiffin.png", isVeg: true, price: "₹100" },
                { name: "Puranpoli", description: "Traditional sweet flatbread stuffed with sweet lentil filling. Melt-in-mouth soft.", image: "public/dishes/puranpoli.png", isVeg: true, price: "₹35 / pc" },
                { name: "Ukdiche Modak", description: "Steamed rice flour dumplings stuffed with fresh coconut and jaggery.", image: "public/dishes/ukdiche-modak.png", isVeg: true, price: "₹30 / pc" },
                { name: "Methi Ladoo", description: "Healthy, energy-boosting ladoos made with fenugreek seeds and dry fruits.", image: "public/dishes/methi-ladoo.png", isVeg: true, price: "₹900 / Kg" }
            ]
        },
        {
            category: "🥬 Veg Specials",
            items: [
                { name: "Veg Pulao", description: "Fragrant basmati rice cooked with mixed vegetables and whole spices.", image: "public/dishes/veg-pulao.png", isVeg: true, price: "₹110" },
                { name: "Pav Bhaji", description: "Spicy mashed vegetable curry served with buttery, soft bread rolls.", image: "public/dishes/pav-bhaji.png", isVeg: true, price: "₹100" },
                { name: "Puranpoli", description: "Traditional sweet flatbread stuffed with sweet lentil filling.", image: "public/dishes/puranpoli.png", isVeg: true, price: "₹35 / pc" },
                { name: "Ukdiche Modak", description: "Steamed rice flour dumplings stuffed with fresh coconut and jaggery.", image: "public/dishes/ukdiche-modak.png", isVeg: true, price: "₹30 / pc" },
                { name: "Aloo Paratha", description: "Whole wheat flatbread stuffed with a spiced potato mixture.", image: "public/dishes/aloo-paratha.png", isVeg: true, price: "₹50 / pc" },
                { name: "Methi Paratha", description: "Healthy flatbread blended with fresh fenugreek leaves and mild spices.", image: "public/dishes/methi-paratha.png", isVeg: true, price: "₹40 / pc" },
                { name: "Chole Puri", description: "Spicy chickpea curry paired with deep-fried, fluffy Indian bread.", image: "public/dishes/chole-puri.png", isVeg: true, price: "₹90" }
            ]
        },
        {
            category: "🍗 Non Veg Special",
            items: [
                { name: "Chicken Curry", description: "Authentic Maharashtrian style chicken cooked in a rich, spicy gravy.", image: "public/dishes/chicken-curry.png", isVeg: false, price: "₹180" },
                { name: "Egg Curry", description: "Boiled eggs simmered in a flavorful onion and tomato masala base.", image: "public/dishes/egg-curry.png", isVeg: false, price: "₹110" },
                { name: "Prawns Masala", description: "Fresh prawns cooked in a spicy, coconut-infused thick masala.", image: "public/dishes/prawns-masala.png", isVeg: false, price: "₹280" },
                { name: "Chicken Biryani", description: "Aromatic basmati rice layered with marinated chicken and traditional spices.", image: "public/dishes/chicken-biryani.png", isVeg: false, price: "₹180" }
            ]
        },
        {
            category: "🪔 Diwali Faral",
            items: [
                { name: "Chakali - bhajani", description: "Crispy, savory spiral snacks made from a traditional mixed-grain flour.", image: "public/dishes/chakali.png", isVeg: true, price: "₹100 / 250g" },
                { name: "Shankarpali", description: "Sweet, diamond-shaped, deep-fried biscuits. Perfect for tea time.", image: "public/dishes/shankarpali.png", isVeg: true, price: "₹90 / 250g" },
                { name: "Karanji", description: "Crescent-shaped sweet pastry filled with dry coconut and dry fruits.", image: "public/dishes/karanji.png", isVeg: true, price: "₹120 / 250g" },
                { name: "Besan Ladoo", description: "Roasted gram flour sweets enriched with pure ghee and cardamom.", image: "public/dishes/besan-ladoo.png", isVeg: true, price: "₹110 / 250g" },
                { name: "Rava Ladoo", description: "Semolina and fresh coconut ladoos bursting with traditional flavors.", image: "public/dishes/rava-ladoo.png", isVeg: true, price: "₹100 / 250g" },
                { name: "Methi Ladoo", description: "Nourishing fenugreek and jaggery ladoos for immunity and health.", image: "public/dishes/methi-ladoo.png", isVeg: true, price: "₹120 / 250g" },
                { name: "Dink Ladoo", description: "Edible gum ladoos mixed with dry fruits, highly nutritious and warm.", image: "public/dishes/dink-ladoo.png", isVeg: true, price: "₹150 / 250g" }
            ]
        },
        {
            category: "🍽️ All Menu",
            items: [
                { name: "Chapati", description: "Soft, whole wheat Indian flatbread.", image: "public/dishes/chapati.png", isVeg: true, price: "₹10 / pc" },
                { name: "Dal", description: "Comforting yellow lentil soup tempered with spices.", image: "public/dishes/dal.png", isVeg: true, price: "₹70" },
                { name: "Rice", description: "Fluffy, steamed traditional white rice.", image: "public/dishes/rice.png", isVeg: true, price: "₹60" },
                { name: "Sabji", description: "Fresh seasonal vegetable dry curry.", image: "public/dishes/sabji.png", isVeg: true, price: "₹80" },
                { name: "Tandul Bhakri", description: "Authentic Maharashtrian rice flour flatbread.", image: "public/dishes/tandul-bhakri.png", isVeg: true, price: "₹20 / pc" },
                { name: "Jowar Bhakri", description: "Gluten-free, healthy sorghum flour flatbread.", image: "public/dishes/jowar-bhakri.png", isVeg: true, price: "₹20 / pc" },
                { name: "Paratha", description: "Layered, pan-fried whole wheat flatbread.", image: "public/dishes/paratha.png", isVeg: true, price: "₹25 / pc" }
            ]
        }
    ]
};