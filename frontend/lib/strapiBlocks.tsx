import React from 'react';

export function blocksToText(blocks: any[] | null | undefined): string {
    if (!blocks || !Array.isArray(blocks)) return "";

    return blocks
        .map((block: any) => {
            if (block.type === 'paragraph' || block.type === 'heading') {
                return block.children?.map((child: any) => child.text).join('') || "";
            }
            if (block.type === 'list') {
                return block.children?.map((item: any) =>
                    item.children?.map((child: any) => child.text).join('')
                ).join(' ') || "";
            }
            return "";
        })
        .join(' ');
}

export const BlocksRenderer: React.FC<{ content: any[] | null | undefined }> = ({ content }) => {
    if (!content || !Array.isArray(content)) return null;

    return (
        <div className="strapi-blocks">
            {content.map((block, index) => {
                switch (block.type) {
                    case 'paragraph':
                        return (
                            <p key={index} className="mb-4">
                                {block.children?.map((child: any, i: number) => (
                                    <span key={i} className={child.bold ? 'font-bold' : '' + (child.italic ? ' italic' : '')}>
                                        {child.text}
                                    </span>
                                ))}
                            </p>
                        );
                    case 'heading':
                        const Level = `h${block.level || 2}` as any;
                        return (
                            <Level key={index} className="font-bold mb-4 mt-6 text-2xl">
                                {block.children?.map((child: any, i: number) => (
                                    <span key={i}>{child.text}</span>
                                ))}
                            </Level>
                        );
                    case 'list':
                        const ListTag = block.format === 'ordered' ? 'ol' : 'ul';
                        return (
                            <ListTag key={index} className={`mb-4 ml-6 ${block.format === 'ordered' ? 'list-decimal' : 'list-disc'}`}>
                                {block.children?.map((item: any, i: number) => (
                                    <li key={i} className="mb-2">
                                        {item.children?.map((child: any, j: number) => (
                                            <span key={j} className={child.bold ? 'font-bold' : ''}>
                                                {child.text}
                                            </span>
                                        ))}
                                    </li>
                                ))}
                            </ListTag>
                        );
                    default:
                        return null;
                }
            })}
        </div>
    );
};
