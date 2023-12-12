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
      image:
        'https://drive.google.com/uc?export=download&id=1jD-zM1_YqDY67j5py5pwQkkCRXj90m-y', // Add the URL to your image here
    },
    {
      type: 'work',
      date: '3/6',
      title: 'Ngày chuyển giao từ chị em sang anh em',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=12iuMbi53CvPJrmpWS60hZbvWGXNsRmIV',
    },
    {
      type: 'work',
      date: '11/6',
      title: 'sự ra đời củ album chung',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=14Yalm9yPMMMQvHsBngbLi6VU6xUlnUvk',
    },
    {
      type: 'work',
      date: '12/6',
      title:
        'Trương Tùng uống say xong sang nhà Thanh Nga ôm rồi được tặng dỗi pass',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=1t19mnvkHN1PwT7ympIg8DPZfw9MdydfE',
    },
    {
      type: 'work',
      date: '16/6',
      title: 'Buổi chơi wescape huyền thoại',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=1AbFHMchleeDhNYxJjyDXawHqHRjmolVv',
    },
    {
      type: 'work',
      date: '24/6',
      title: 'Socola tình yêu :)))',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=1Ga0AY5LjdiFNyRb89qhZ3S5NYLIKy3c7',
    },
    {
      type: 'work',
      date: '30/6',
      title: 'Sinh nhật Thanh Nga',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image:
        'https://drive.google.com/uc?export=view&id=1oZpyQAO2XarKjbqe3abIRxoBMltVHROW',
    },
    {
      type: 'work',
      date: '1/7',
      title: 'Bếp trưởng Thanh Nga, phụ bếp Trương Tùng',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=1pnJAxqEGLkEOs1PRmcCoWwTjoRMEYgiA',
    },
    {
      type: 'work',
      date: '10/7',
      title: 'Mở cam discord lắp lego :)))',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=1SOjs6K1pkF86RMJALE0tFCVLsfRSiZVV',
    },
    {
      type: 'work',
      date: '15/7',
      title: 'Sang nhà chị Alex chơi truth or dare…',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=1s41CX3hUMTEr0yjwTUTMja9GVOa7WlId',
    },
    {
      type: 'work',
      date: '20/7',
      title: 'Choảng nhau lần đầu :(((',
      icon: <HeartBrokenIcon />,
      iconColor: 'rgb(128, 128, 128)',
      image:
        'https://drive.google.com/uc?export=view&id=1R07Ce6pnZYSWcli147SQTmOprUtEvFAX',
    },
    {
      type: 'work',
      date: '22/7',
      title: 'Được chị Alex chụp bộ ảnh rấcccc xịn ạa',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image:
        'https://drive.google.com/uc?export=view&id=1hvaVPVyQbJ93-MQ1Hq5hDlffG1xU30YW',
    },
    {
      type: 'work',
      date: '23/7',
      title: 'Trương Tùng và Thanh Nga đi tô tượng',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=151orURWSYNC4wdCY7JdqNskFyWGDN8kZ',
    },
    {
      type: 'work',
      date: '25/7',
      title: 'Ngày sự thật được phơi bày',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=1BdX61-tq4nuLN_v_u3Sr9LnJXYZkJGp6',
    },
    {
      type: 'work',
      date: '26/7',
      title: 'Thanh Nga thả thính :)))',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image:
        'https://drive.google.com/uc?export=view&id=16NQY3K44ma0hA-ESJjIntOnh3zAkyul6',
    },
    {
      type: 'work',
      date: '28/7',
      title: 'Thanh Nga viết tâm thư chúc đi ngủ',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image:
        'https://drive.google.com/uc?export=view&id=1RUzb3Dl4m5vNCMMaWgWPBuWLKfKSoc9P',
    },
    {
      type: 'work',
      date: '29/7',
      title: 'Thanh Nga hộ tống đi đu idol',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image:
        'https://drive.google.com/uc?export=view&id=1tn7Jcote58NK7GEbx6t9i-FYxxYihyW8',
    },
    {
      type: 'work',
      date: '1/8',
      title: 'Mua cafe tặng Thanh Nga ngày bạn gái',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=1rqb32Sk-Q7Qpp7qG_85lMd1Rt47WrKD1',
    },
    {
      type: 'work',
      date: '1/8',
      title: 'đượt Thanh Nga mua thuốc sau bồi bổ ạa',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image:
        'https://drive.google.com/uc?export=view&id=1Dx2ZFwP_C3drv1y4y9g8MMJQRMw7_4tY',
    },
    {
      type: 'work',
      date: '10/8',
      title: 'Nghe lời TNga đi cắt tóc và cái kết',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=15Fks8KrC6D8YsKuGgoRsgKfRtO4DMMoK',
    },
    {
      type: 'work',
      date: '13/8',
      title: 'Thức xuyên đêm ăn phở thìn',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=1M2-859r9FSD-ggs_9iKbwZwvaKLFBNnp',
    },
    {
      type: 'work',
      date: '14/8',
      title: 'Choảng nhau lần 2 :((((((( ',
      icon: <HeartBrokenIcon />,
      iconColor: 'rgb(128, 128, 128)',
      image:
        'https://drive.google.com/uc?export=view&id=1UIstqGnPBJm9iqtz3tp6mMBGu9bs5eMQ',
    },
    {
      type: 'work',
      date: '25/8',
      title: 'tuần trăng mật ở SG',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image:
        'https://drive.google.com/uc?export=view&id=1pxkWWdya1tTShKX3nUpSQl0d5YOa3Wbw',
    },
    {
      type: 'work',
      date: '2/9',
      title: 'Tặng Thanh Nga hoa giấy kỉ niệm 3 tháng yêu nhau',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=11q_SChys9YAvSrM5FEgTDKcyee7H9Iq4',
    },
    {
      type: 'work',
      date: '3/9',
      title: 'Tặng hoa giấy xong đượt Thanh Nga viết tâm thư',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image:
        'https://drive.google.com/uc?export=view&id=1-rUiov0nhZ1At1fftbe5LmouHK9EzxiD',
    },
    {
      type: 'work',
      date: '3/9',
      title: 'Đi thác nước ngắm Thanh Nga',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=1xkJ35xBsuPQEMCuMFdlOEzPfjIet5N1S',
    },
    {
      type: 'work',
      date: '9/9',
      title: 'Thử tài làm gốm cùng Thanh Nga',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=1QRSQ_ISdDLLKXEy1lFSVkx7_gyjbHrYb',
    },
    {
      type: 'work',
      date: '10/9',
      title: 'Đi xem Thanh Nga nhảy ở trường quân sự',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=1U8dsgywuiZxZ1aUIMkAhFL9vQEoKJvm6',
    },
    {
      type: 'work',
      date: '15/9',
      title: 'Cook and eat lần 2',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=10QoTlkhYOepxJhMEgdTY5gbO7U151QdW',
    },
    {
      type: 'work',
      date: '16/9',
      title: 'đính hôn nhưng ko bao giờ đeo nhẫn :)))',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image:
        'https://drive.google.com/uc?export=view&id=10ZJBDL3bsSUESLt1hjzQebEjBQ-NhE0I',
    },
    {
      type: 'work',
      date: '23/9',
      title: 'Được Thanh Nga tặng vỏ airpod đôi',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=1uV904D1BrWfOrVJ739p-3E6xjQX4oxJd',
    },
    {
      type: 'work',
      date: '29/9',
      title: 'Tí thì cho TNga leo cây đêm trung thu',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=1ZSYWatig64orEmM1dbzTaA_SyiJSLtsu',
    },
    {
      type: 'work',
      date: '2/10',
      title: 'Thanh Nga viết thư tay trên thiệp từ quyển sách giữ 5 năm hơn',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image:
        'https://drive.google.com/uc?export=view&id=1TA1h7fsIwBTMKGxjplUo6Njzfi5AzPxD',
    },
    {
      type: 'work',
      date: '8/10',
      title: 'Tốt nghiệp Thanh Nga',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image:
        'https://drive.google.com/uc?export=view&id=19BnvnuYAb8EYuxKebwtK8mlLLaPYNpl9',
    },
    {
      type: 'work',
      date: '15/10',
      title: 'Cook and eat phần thứ 3',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=1OUsMQMVqrdfb8eebgqcITXw7JjNi1yfi',
    },
    {
      type: 'work',
      date: '20/10',
      title: 'Trương Tùng dẫn Thanh Nga đi chơi 20/10',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=1cpmy9Zwz7i7Pvf2orZ15l8p1zB5eyc7R',
    },
    {
      type: 'work',
      date: '26/10',
      title: 'choảng nhau lần 3',
      icon: <HeartBrokenIcon />,
      iconColor: 'rgb(128, 128, 128)',
      image:
        'https://drive.google.com/uc?export=view&id=1ui5r60tJoNexlhoazNWL_LApAlrHN5rH',
    },
    {
      type: 'work',
      date: '28/10',
      title: 'Đi chơi halloween',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=1YzhJXLRqu0MIdDMnk87Slh2_0U8TniTU',
    },
    {
      type: 'work',
      date: '2/11',
      title: 'Trương Tùng được Thanh Nga tặng healing pills',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image:
        'https://drive.google.com/uc?export=view&id=1Mh6hL0sDMjbdYY1rY3Dbw1yy_uR0__FS',
    },
    {
      type: 'work',
      date: '4/11',
      title: 'Sang nhà Thanh Nga làm tranh in bàn tay ạaa',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image:
        'https://drive.google.com/uc?export=view&id=1bQyVgWUO9Ny9kpW5NSNjdLXO5dAxzbya',
    },
    {
      type: 'work',
      date: '5/11',
      title: 'Đi xem Thanh Nga nhảy ạaa',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=15EktoEoH1FtwbjoZX6Q4dP0LN-DzSTWY',
    },
    {
      type: 'work',
      date: '11/11',
      title: 'Chụp ảnh cưới',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=17ldRHAWZpfyetYNIz_Dn293ROUK8hKlQ',
    },
    {
      type: 'work',
      date: '12/11',
      title: 'Đi ủng hộ chứng nghiện cờ bạc của Thanh Nga',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=1pRfW6qLVBdGF5bL1H9CnO-0E5GwDcx7s',
    },
    {
      type: 'work',
      date: '18/11',
      title: 'Ngày con người thật của Trương Tùng bị vạch trần',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=1QAeSRRoXASQ0b8pXH-l9ZfqUd3HTv0Zo',
    },
    {
      type: 'work',
      date: '19/11',
      title: 'Đi ăn sáng trong cơn giận dỗi',
      icon: <FavoriteIcon />,
      iconColor: 'rgb(219, 112, 147)',
      image:
        'https://drive.google.com/uc?export=view&id=17qzrqEb-F-i3fVUOx3r1p96pb9QIDOd4',
    },
    {
      type: 'work',
      date: '3/12',
      title: 'Thanh Nga mặc sweater Trương Tùng tặng',
      icon: <StarIcon />,
      iconColor: 'rgb(255, 213, 79)',
      image:
        'https://drive.google.com/uc?export=view&id=1AD48qtlfTLu0Ea02nGpv_6K0EE-tKOOp',
    },
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
              src={item.image}
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
