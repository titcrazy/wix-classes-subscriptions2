import React, { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';

export default function VerticalTimelineComponent() {
  const [showAllItems, setShowAllItems] = useState(false);

  const timelineItems = [
    {
      type: 'work',
      date: '2011 - present',
      title: 'Creative Director',
      subtitle: 'Miami, FL',
      content: 'Creative Direction, User Experience, Visual Design, Project Management, Team Leading',
      icon: <WorkIcon />,
      iconColor: 'rgb(33, 150, 243)',
    },
    {
      type: 'work',
      date: '2010 - 2011',
      title: 'Art Director',
      subtitle: 'San Francisco, CA',
      content: 'Creative Direction, User Experience, Visual Design, SEO, Online Marketing',
      icon: <WorkIcon />,
      iconColor: 'rgb(33, 150, 243)',
    },
    {
      type: 'work',
      date: '2008 - 2010',
      title: 'Web Designer',
      subtitle: 'Los Angeles, CA',
      content: 'User Experience, Visual Design',
      icon: <WorkIcon />,
      iconColor: 'rgb(33, 150, 243)',
    },
    {
      type: 'education',
      date: 'April 2013',
      title: 'Content Marketing for Web, Mobile and Social Media',
      subtitle: 'Online Course',
      content: 'Strategy, Social Media',
      icon: <SchoolIcon />,
      iconColor: 'rgb(233, 30, 99)',
    },
    {
      type: 'education',
      date: 'November 2012',
      title: 'Agile Development Scrum Master',
      subtitle: 'Certification',
      content: 'Creative Direction, User Experience, Visual Design',
      icon: <SchoolIcon />,
      iconColor: 'rgb(233, 30, 99)',
    },
    {
      type: 'education',
      date: '2002 - 2006',
      title: 'Bachelor of Science in Interactive Digital Media Visual Imaging',
      subtitle: 'Bachelor Degree',
      content: 'Creative Direction, Visual Design',
      icon: <SchoolIcon />,
      iconColor: 'rgb(233, 30, 99)',
    },
  ];

  const initialItemsToShow = 2;
  const displayedItems = showAllItems ? timelineItems : timelineItems.slice(0, initialItemsToShow);

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
          <h3 className="vertical-timeline-element-title" style={{ color: '#000' }}>{item.title}</h3>
          <h4 className="vertical-timeline-element-subtitle" style={{ color: '#000' }}>{item.subtitle}</h4>
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
