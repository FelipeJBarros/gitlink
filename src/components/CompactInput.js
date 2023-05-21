import { useState, useRef } from 'react';
import { StyleSheet, View, TextInput, TouchableHighlight } from 'react-native';
import Icons from './Icons';
import { useProfileProvider } from '../contexts/ProfileContext';

export default function CompactInput() {
    const { setSearchFor } = useProfileProvider();

    const [open, setOpen] = useState(false);
    const [valueInput, setValueInput] = useState('');

    const inputRef = useRef(null);

    const handleInputToogleStatus = (event) => {
        setOpen(prevStatus => !prevStatus)
    }

    const handleInputFocus = () => {
        if(open) {
            inputRef.current.focus()
        }
    }

    const handleSubmit = () => {
        setSearchFor(valueInput);
        setOpen(false);
        setValueInput('');
    }

    return (
        <TouchableHighlight>    
            <View
                style={styles.wrapper}
                onTouchStart={handleInputToogleStatus}
                onTouchEnd={handleInputFocus}
            >
                <Icons name={open ? 'close' : 'search'} size={32} color='white' />
                {open && (
                    <TextInput
                        ref={inputRef}
                        style={{ color: 'white', fontSize: 18, width: 140, height: 32}}
                        onChangeText={setValueInput}
                        onSubmitEditing={handleSubmit}
                        value={valueInput}
                        placeholder='Username'
                        placeholderTextColor='#555'
                        maxLength={39}
                    />
                )}
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    wrapper: { 
        backgroundColor: 'black',
        padding: 10, borderRadius: 10, 
        bottom: 0, right: -24, position: 'absolute',
        flexDirection: 'row', gap: 20
    }
})