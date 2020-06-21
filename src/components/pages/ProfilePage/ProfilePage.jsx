import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Button, H1, Tabs, Text } from '@holism/core';
import styled from 'styled-components';
import MyInitiativesBlock from 'organisms/MyInitiativesBlock/MyInitiativesBlock';
import MyProgressBlock from 'organisms/MyProgressBlock/MyProgressBlock';

import CenterContentHoc from '@/components/HOC/CenterContentHOC';

const ProfilePage = () => {
  const [ideas, setIdeas] = useState([]);
  const [solutions, setSolustions] = useState([]);
  const [tabList, setTabList] = useState([
    {
      id: 'initiatives',
      label: 'Мои инициативы',
      isActive: true,
    },
    {
      id: 'progress',
      label: 'Мой прогресс',
      isActive: false,
    },
  ]);

  useEffect(() => {
    axios
      .get('/userprofile/userprofile/', {
        params: {
          limit: 4,
        },
      })
      .then(r => {
        const results = r.data.results[0];
        console.log(results.ideas)
        setIdeas(results.ideas);
        setSolustions(results.solutions);
      });
  }, []);

  const handleTabChange = ({ id, isActive, label }) => {
    setTabList(tabList.map(item => (item.id === id ? { id, isActive: true, label } : { ...item, isActive: false })));
  };

  const activeTab = tabList.find(tab => tab.isActive);

  const getActiveTabContent = () => {
    switch (activeTab.id) {
      case 'initiatives':
        return <MyInitiativesBlock ideas={ideas.slice(0, 4)} solutions={solutions} />;
      case 'progress':
        return <MyProgressBlock />;
      default:
        return <></>;
    }
  };

  return (
    <CenterContentHoc>
      <H1 style={{ marginBottom: 16 }}>Личный кабинет</H1>
      <Tabs list={tabList} onChange={handleTabChange} />
      <div style={{ marginBottom: 24 }} />
      {getActiveTabContent()}
    </CenterContentHoc>
  );
};

export default ProfilePage;
