import React from 'react';
import Link from 'next/link';
import { Progress } from './ui/progress';
import { ArrowRight } from 'lucide-react';
import type { MemoryBlock } from '@/data/models/memoryBlock';
import { MemoryBlockType } from '@/data/models/memoryBlockType';
import { narrowMetadata } from '@/data/block_metadata';
import { getBlockConfidencePercentage } from '@/utils/blockUtils';

interface MemoryBlockListItemProps {
    block: MemoryBlock;
}

/**
 * Component to render a MemoryBlock as a card/list item
 * Styled to match the items in KnowledgeRelatedNodes
 */
const MemoryBlockListItem: React.FC<MemoryBlockListItemProps> = ({ block }) => {
    const blockId = block.id || 'unknown';

    // Extract title from metadata or text
    let title = '';
    let description = '';

    // Extract title based on block type
    if (block.metadata) {
        switch (block.type) {
            case MemoryBlockType.knowledge:
                const knowledgeMeta = narrowMetadata(MemoryBlockType.knowledge, block.metadata);
                title = knowledgeMeta.domain || knowledgeMeta.validity || '';
                break;

            case MemoryBlockType.project:
                const projectMeta = narrowMetadata(MemoryBlockType.project, block.metadata);
                title = projectMeta.name || '';
                description = projectMeta.description || '';
                break;

            case MemoryBlockType.task:
                const taskMeta = narrowMetadata(MemoryBlockType.task, block.metadata);
                title = taskMeta.name || '';
                description = taskMeta.description || '';
                break;

            case MemoryBlockType.doc:
                const docMeta = narrowMetadata(MemoryBlockType.doc, block.metadata);
                title = docMeta.title || '';
                break;
        }
    }

    // Fallback title from text
    if (!title) {
        title = block.text?.substring(0, 50) || `Untitled ${block.type}`;
    }

    // Fallback description from text
    if (!description) {
        description = block.text || '';
    }

    // Get confidence percentage from the utility function
    const confidencePercentage = getBlockConfidencePercentage(block);

    return (
        <Link
            href={`/blocks/${blockId}`}
            className="content-block hover:border-knowledge group"
        >
            <div className="flex items-start justify-between mb-2">
                <h3 className="text-base font-medium group-hover:text-knowledge transition-colors duration-200">
                    {title}
                </h3>
                <div className="flex items-center space-x-1 text-xs">
                    <span className="text-muted-foreground">Confidence:</span>
                    <span className="font-medium">{Math.round(confidencePercentage)}%</span>
                </div>
            </div>

            <Progress value={confidencePercentage} className="h-1 mb-3" />

            <p className="text-sm text-muted-foreground line-clamp-2">
                {description}
            </p>

            <div className="mt-2 flex justify-end">
                <span className="text-xs text-knowledge flex items-center">
                    Explore
                    <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
            </div>
        </Link>
    );
};

export default MemoryBlockListItem; 