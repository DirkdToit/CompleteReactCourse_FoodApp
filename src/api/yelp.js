import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer XsvqiZLazs1B_G1DEfrMX_P9dU9rL5JLbMvg8ZFrchoV2WKa_GyomojgjGiKw-ZhQADIXBRR9o5GipywrYSzmvDhS5ShdAMJmFfFDhjeCwO7uLcov5bAHjwJ6imfZHYx'
    }
});
