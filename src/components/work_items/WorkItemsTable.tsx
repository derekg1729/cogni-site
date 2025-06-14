'use client';

import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow
} from '@/components/ui/table';
import type { MemoryBlock } from '@/data/models/memoryBlock';
import { WorkItemsRow } from './WorkItemsRow';

interface WorkItemsTableProps {
    blocks: MemoryBlock[];
    onOpenInSidePanel?: (blockId: string) => void;
}

export function WorkItemsTable({ blocks, onOpenInSidePanel }: WorkItemsTableProps) {
    React.useEffect(() => {
        console.log('WorkItemsTable received blocks:', blocks);
    }, [blocks]);

    return (
        <div className="border rounded-md">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[300px]">Title</TableHead>
                        <TableHead>Type</TableHead>
                        <TableHead>Priority</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Owner</TableHead>
                        <TableHead>Progress</TableHead>
                        <TableHead>Dates</TableHead>
                        <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {blocks.length === 0 ? (
                        <TableRow>
                            <TableCell colSpan={8} className="h-24 text-center">
                                No work items found
                            </TableCell>
                        </TableRow>
                    ) : (
                        blocks.map((block) => (
                            <WorkItemsRow
                                key={block.id}
                                block={block}
                                onOpenInSidePanel={onOpenInSidePanel}
                            />
                        ))
                    )}
                </TableBody>
            </Table>
        </div>
    );
} 