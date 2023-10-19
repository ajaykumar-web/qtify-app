import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import style from './SongsTabs.module.css';
import CarouselSection from '../CarouselSection/CarouselSection';

const SongsTabs = ({ data, type, title }) => {
    const [value, setValue] = useState(0);
    const allSongsTabs = ['All', 'Rock', 'Pop', 'Jazz', 'Blues'];
    const handleTabsChange = (event, val) => {
        setValue(val);
    };

    function TabPanel(props) {
        const { children, value, index } = props;
        return <div>{value === index && <>{children}</>}</div>;
    }

    const filteredData = (tabIndex) => {
        if (tabIndex === 0) {
            return data;
        } else {
            const tabLabel = ['Rock', 'Pop', 'Jazz', 'Blues'][tabIndex - 1];
            return data?.filter(
                (item) => item?.genre?.key === tabLabel?.toLowerCase()
            );
        }
    };

    return (
        <>
            <div>
                <div className={style.pageHeader}>
                    <h3 className={style.sectionLabel}>{title}</h3>
                </div>
                <Box sx={{ width: '100%' }}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <Tabs
                            value={value}
                            onChange={handleTabsChange}
                            aria-label="basic tabs"
                        >
                            {allSongsTabs.map((item) => (
                                <Tab
                                    label={item}
                                    key={item}
                                    sx={{ color: 'white' }}
                                />
                            ))}
                        </Tabs>
                    </Box>

                    {allSongsTabs.map((_, index) => (
                        <TabPanel key={index} value={value} index={index}>
                            <div>
                                <CarouselSection
                                    data={filteredData(index)}
                                    type={type}
                                    title={title}
                                />
                            </div>
                        </TabPanel>
                    ))}
                </Box>
            </div>
        </>
    );
};

export default SongsTabs;
