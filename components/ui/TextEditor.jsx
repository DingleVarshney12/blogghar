"use client";
import React, { useState } from 'react';
import FroalaEditorComponent from 'react-froala-wysiwyg';

// Import Froala styles
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'froala-editor/css/themes/dark.min.css';
import 'froala-editor/css/themes/gray.min.css';

// Import plugins
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/plugins/video.min.js';
import 'froala-editor/js/plugins/link.min.js';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/char_counter.min.js';
import 'froala-editor/js/plugins/colors.min.js';
import 'froala-editor/js/plugins/emoticons.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/fullscreen.min.js';
import 'froala-editor/js/plugins/code_beautifier.min.js';
import { useTheme } from 'next-themes';

const TextEditor = ({ onContentChange }) => {
    const [model, setModel] = useState('');
    const { theme } = useTheme();

    const handleModelChange = (content) => {
        setModel(content);
        onContentChange(content);
    };

    const config = {
        theme: theme === 'dark' ? 'dark' : "default",

        toolbarButtons: [
            'bold', 'italic', 'underline', 'strikeThrough',
            'textColor', 'backgroundColor',
            'fontSize', 'codeBeautifier', '|',
            'formatOL', 'formatUL', 'align', '|',
            'insertLink', 'insertImage', 'insertVideo', '|',
            'undo', 'redo', 'clearFormatting', 'fullscreen', '|',
            'emoticons',
        ],

        pluginsEnabled: [
            'codeBeautifier',
            'fontSize',
            'align', 'charCounter', 'colors', 'emoticons',
            'image', 'link', 'lists', 'video'
        ],
        fontSizes: ['8', '10', '12', '14', '18', '24', '30', '36', '48', '60', '72', '96'],
        codeBeautifierOptions: {
            end_with_newline: true,
            indent_inner_html: true,
            extra_liners: [
                'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
                'blockquote', 'pre', 'ul', 'ol', 'table', 'dl'
            ],
            brace_style: 'expand',
            indent_char: ' ',
            indent_size: 4,
            wrap_line_length: 0
        },
        imageUploadURL: 'http://localhost:5000/upload_image',
        videoUploadURL: 'http://localhost:5000/upload_video',

        charCounterMax: 1000,
    };

    return (
        <div>
            <FroalaEditorComponent
                tag="textarea"
                config={config}
                model={model}
                onModelChange={handleModelChange}
            />
        </div>
    );
};

export default TextEditor;
