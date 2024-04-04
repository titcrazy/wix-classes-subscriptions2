import React, { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';

export default function VerticalTimelineComponent() {
  const [showAllItems, setShowAllItems] = useState(false);

  const timelineItems = [
    {
      type: 'work',
      date: '2/6/2023',
      title: 'Ngày Trương Tùng không chịu được sự xinh đẹp của Thanh Nga',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image: '1.jpg',
    },
    {
      type: 'work',
      date: '3/6',
      title: 'Ngày chuyển giao từ chị em sang anh em',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '2.jpg',
    },
    {
      type: 'work',
      date: '11/6',
      title: 'sự ra đời củ album chung',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '3.jpg',
    },
    {
      type: 'work',
      date: '12/6',
      title: 'Trương Tùng uống say xong sang nhà Thanh Nga ôm rồi được tặng dỗi pass',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '4.jpg',
    },
    {
      type: 'work',
      date: '16/6',
      title: 'Buổi chơi wescape huyền thoại',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '5.jpg',
    },
    {
      type: 'work',
      date: '24/6',
      title: 'Socola tình yêu :)))',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '6.jpg',
    },
    {
      type: 'work',
      date: '30/6',
      title: 'Sinh nhật Thanh Nga',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image: '7.jpg',
    },
    {
      type: 'work',
      date: '1/7',
      title: 'Bếp trưởng Thanh Nga, phụ bếp Trương Tùng',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '8.jpg',
    },
    {
      type: 'work',
      date: '10/7',
      title: 'Mở cam discord lắp lego :)))',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '9.jpg',
    },
    {
      type: 'work',
      date: '15/7',
      title: 'Sang nhà chị Alex chơi truth or dare…',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '10.jpg',
    },
    {
      type: 'work',
      date: '20/7',
      title: 'Choảng nhau lần đầu :(((',
      icon: <HeartBrokenIcon />,
      iconColor: 'rgb(128, 128, 128)',
      image: '11.jpg',
    },
    {
      type: 'work',
      date: '22/7',
      title: 'Được chị Alex chụp bộ ảnh rấcccc xịn ạa',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image: '12.jpg',
    },
    {
      type: 'work',
      date: '23/7',
      title: 'Trương Tùng và Thanh Nga đi tô tượng',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '13.jpg',
    },
    {
      type: 'work',
      date: '25/7',
      title: 'Ngày sự thật được phơi bày',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '14.jpg',
    },
    {
      type: 'work',
      date: '26/7',
      title: 'Thanh Nga thả thính :)))',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image: '15.jpg',
    },
    {
      type: 'work',
      date: '28/7',
      title: 'Thanh Nga viết tâm thư chúc đi ngủ',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image: '16.jpg',
    },
    {
      type: 'work',
      date: '29/7',
      title: 'Thanh Nga hộ tống đi đu idol',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image: '17.jpg',
    },
    {
      type: 'work',
      date: '1/8',
      title: 'Mua cafe tặng Thanh Nga ngày bạn gái',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '18.jpg',
    },
    {
      type: 'work',
      date: '1/8',
      title: 'đượt Thanh Nga mua thuốc sau bồi bổ ạa',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image: '19.jpg',
    },
    {
      type: 'work',
      date: '10/8',
      title: 'Nghe lời TNga đi cắt tóc và cái kết',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '20.jpg',
    },
    {
      type: 'work',
      date: '13/8',
      title: 'Thức xuyên đêm ăn phở thìn',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '21.jpg',
    },
    {
      type: 'work',
      date: '14/8',
      title: 'Choảng nhau lần 2 :((((((( ',
      icon: <HeartBrokenIcon />,
      iconColor: 'rgb(128, 128, 128)',
      image: '22.jpg',
    },
    {
      type: 'work',
      date: '25/8',
      title: 'tuần trăng mật ở SG',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image: '23.jpg',
    },
    {
      type: 'work',
      date: '2/9',
      title: 'Tặng Thanh Nga hoa giấy kỉ niệm 3 tháng yêu nhau',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '24.jpg',
    },
    {
      type: 'work',
      date: '3/9',
      title: 'Tặng hoa giấy xong đượt Thanh Nga viết tâm thư',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image: '25.jpg',
    },
    {
      type: 'work',
      date: '3/9',
      title: 'Đi thác nước ngắm Thanh Nga',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '26.jpg',
    },
    {
      type: 'work',
      date: '9/9',
      title: 'Thử tài làm gốm cùng Thanh Nga',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '27.jpg',
    },
    {
      type: 'work',
      date: '10/9',
      title: 'Đi xem Thanh Nga nhảy ở trường quân sự',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '28.jpg',
    },
    {
      type: 'work',
      date: '15/9',
      title: 'Cook and eat lần 2',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '29.jpg',
    },
    {
      type: 'work',
      date: '16/9',
      title: 'đính hôn nhưng ko bao giờ đeo nhẫn :)))',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image: '30.jpg',
    },
    {
      type: 'work',
      date: '23/9',
      title: 'Được Thanh Nga tặng vỏ airpod đôi',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '31.jpg',
    },
    {
      type: 'work',
      date: '29/9',
      title: 'Tí thì cho TNga leo cây đêm trung thu',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '32.jpg',
    },
    {
      type: 'work',
      date: '2/10',
      title: 'Thanh Nga viết thư tay trên thiệp từ quyển sách giữ 5 năm hơn',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image: '33.jpg',
    },
    {
      type: 'work',
      date: '8/10',
      title: 'Tốt nghiệp Thanh Nga',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image: '34.jpg',
    },
    {
      type: 'work',
      date: '15/10',
      title: 'Cook and eat phần thứ 3',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '35.jpg',
    },
    {
      type: 'work',
      date: '20/10',
      title: 'Trương Tùng dẫn Thanh Nga đi chơi 20/10',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '36.jpg',
    },
    {
      type: 'work',
      date: '26/10',
      title: 'choảng nhau lần 3',
      icon: <HeartBrokenIcon />,
      iconColor: 'rgb(128, 128, 128)',
      image: '37.jpg',
    },
    {
      type: 'work',
      date: '28/10',
      title: 'Đi chơi halloween',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '38.jpg',
    },
    {
      type: 'work',
      date: '2/11',
      title: 'Trương Tùng được Thanh Nga tặng healing pills',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image: '39.jpg',
    },
    {
      type: 'work',
      date: '4/11',
      title: 'Sang nhà Thanh Nga làm tranh in bàn tay ạaa',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image: '40.jpg',
    },
    {
      type: 'work',
      date: '5/11',
      title: 'Đi xem Thanh Nga nhảy ạaa',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '41.jpg',
    },
    {
      type: 'work',
      date: '11/11',
      title: 'Chụp ảnh cưới',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '42.jpg',
    },
    {
      type: 'work',
      date: '12/11',
      title: 'Đi ủng hộ chứng nghiện cờ bạc của Thanh Nga',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '43.jpg',
    },
    {
      type: 'work',
      date: '18/11',
      title: 'Ngày con người thật của Trương Tùng bị vạch trần',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '44.jpg',
    },
    {
      type: 'work',
      date: '19/11',
      title: 'Đi ăn sáng trong cơn giận dỗi',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image: '45.jpg',
    },
    {
      type: 'work',
      date: '3/12',
      title: 'Thanh Nga mặc sweater Trương Tùng tặng',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image: '46.jpg',
    }
    
  ];

  const initialItemsToShow = 2;
  const displayedItems = showAllItems
    ? timelineItems
    : timelineItems.slice(0, initialItemsToShow);

  const handleIconClick = () => {
    setShowAllItems(!showAllItems);
  };

  return (
    <VerticalTimeline>
      {displayedItems.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          className={`vertical-timeline-element--${item.type}`}
          date={item.date}
          iconStyle={{ background: item.iconColor, color: '#fff' }}
          icon={item.icon}
        >
          {/* Include an image if provided with error handling */}
          {item.image && (
            <img
              src={`/gallery/TimelineImage/${item.image}`}
              alt="Timeline"
              className="timeline-image"
              onError={(e) => {
                // Handle image loading errors
                e.target.style.display = 'none'; // or set a fallback image
              }}
            />
          )}

          <h3
            className="vertical-timeline-element-title"
            style={{
              color: '#333333',
              fontFamily: 'Roboto, sans-serif',
              fontSize: '20px',
              marginTop: '15px',
            }}
          >
            {item.title}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ color: '#000' }}
          >
            {item.subtitle}
          </h4>
          <p style={{ color: '#000' }}>{item.content}</p>
        </VerticalTimelineElement>
      ))}

      {/* Conditionally render the "Load More" or "Minimize" button */}
      {timelineItems.length > initialItemsToShow && (
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={showAllItems ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          iconOnClick={handleIconClick}
        />
      )}
    </VerticalTimeline>
  );
}