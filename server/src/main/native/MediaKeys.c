#include <jni.h>
#include <windows.h>
#include <stdlib.h>
#include "MediaKeys.h"

#define KEYEVENTF_KEYDOWN 0

INPUT *generate_keyboard_input(WORD VK) {
	INPUT *input = (INPUT*)calloc(1, sizeof(INPUT));
	input->type = INPUT_KEYBOARD;
	input->ki.wScan = 0;
	input->ki.time = 0;
	input->ki.dwExtraInfo = 0;
	input->ki.wVk = VK;
	input->ki.dwFlags = KEYEVENTF_KEYDOWN;
	return input;
}

void click(WORD VK) {
	// create keydown and keyup input
	INPUT *press_key = generate_keyboard_input(VK);
	INPUT up_key = *press_key;
	up_key.ki.dwFlags = KEYEVENTF_KEYUP;

	const BYTE size = 2;
	INPUT sequence[] = { *press_key, up_key };
	SendInput(size, sequence, sizeof(INPUT));

	free(press_key);
	press_key = NULL;
}

JNIEXPORT void JNICALL Java_pl_pilotto_server_service_media_WindowsMediaKeysService_playPause
    (JNIEnv *env, jobject obj)
{
    click(VK_MEDIA_PLAY_PAUSE);
}