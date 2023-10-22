import { useState } from 'react';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';

import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/matchbrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/display/fullscreen';
import { Controlled as ControlledEditor } from 'react-codemirror2';

import { Box, styled } from '@mui/material';
import { CloseFullscreen ,OpenInFull } from '@mui/icons-material';

import '../App.css';

const Container = styled(Box)`
    flex-grow: 1;
    flex-basic: 0;
    display: flex;
    flex-direction: column;
    padding: 0 8px 8px;
`

const Header = styled(Box)`
    display: flex;
    justify-content: space-between;
    background: #060606;
    color: #AAAEBC;
    font-weight: 700;
`
const Heading = styled(Box)`
    background: #1d1e22;
    padding: 9px 12px;
    display: flex;
`

const Editor = ({ heading, language, value, onChange, icon, color }) => {

    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
        onChange(value);
    }

    return (
        <Container className={`editor-container ${open ? '' : 'collapsed'}`} >
            <Header>
                <Heading>
                    <Box 
                        component="span"
                        style={{
                            background: color,
                            borderRadius: 5,
                            marginRight: 5,
                            height: 20,
                            width: 20,
                            display: 'flex',
                            placeContent: 'center',
                            color: '#000',
                            paddingBottom: 2
                        }}
                    >
                        {icon}
                    </Box>
                    {heading}
                </Heading>
                {open ? (<CloseFullscreen 
                    fontSize="small"
                    style={{ alignSelf: 'center'}}
                    onClick={() => setOpen(prevState => !prevState)}
                />) :
                (<OpenInFull 
                    fontSize="small"
                    style={{ alignSelf: 'center'}}
                    onClick={() => setOpen(prevState => !prevState)}
                />)}
            </Header>
            <ControlledEditor 
                onBeforeChange={handleChange}
                value={value}
                className="code-mirror-wrapper"
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material',
                    autoCloseBrackets: true,
                    matchBrackets: true,
                    highlightNonMatching: true,
                    autoCloseTags: true,
                    fullScreen: true, 
                }}
            />
        </Container>
    )
}

export default Editor;