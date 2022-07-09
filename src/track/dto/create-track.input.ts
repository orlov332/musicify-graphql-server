import { Track } from '../entities/track.entity';

export type CreateTrackInput = Omit<Track, '_id'>;
